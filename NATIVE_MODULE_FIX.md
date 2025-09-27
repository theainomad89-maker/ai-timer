# Native Module Method Signature Fix

## Issue
The error "Error while converting JavaScript argument 10 to Objective C type RCTPromiseResolveBlock" was occurring because of a mismatch between the method signature in the Swift file and how React Native expects native module methods to be structured.

## Root Cause
React Native automatically handles promise resolvers and rejecters for native module methods. The issue was that optional parameters were positioned in a way that caused React Native to misinterpret which argument was the resolver.

## Fix Applied

### 1. Reordered Method Parameters
**Before (problematic order):**
```swift
func startLiveActivity(
    _ workoutTitle: String,
    currentEventLabel: String,
    nextEventLabel: String?,           // Optional parameter early
    currentEventDuration: Double,
    totalWorkoutDuration: Double,
    currentEventStartTime: Double,
    workoutStartTime: Double,
    isPaused: Bool,
    round: NSNumber?,                  // Optional parameter
    kind: String?,                     // Optional parameter
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
)
```

**After (fixed order):**
```swift
func startLiveActivity(
    _ workoutTitle: String,
    currentEventLabel: String,
    currentEventDuration: Double,
    totalWorkoutDuration: Double,
    currentEventStartTime: Double,
    workoutStartTime: Double,
    isPaused: Bool,                    // Required parameters first
    nextEventLabel: String?,           // Optional parameters last
    round: NSNumber?,
    kind: String?,
    resolver resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
)
```

### 2. Updated Bridge File
Updated `LiveActivityManagerBridge.m` to match the new parameter order.

### 3. Updated JavaScript Calls
Updated the JavaScript calls in `lib/liveActivityNew.ts` to match the new parameter order.

## Files Modified
- `ios/Pulse/LiveActivityManager.swift`
- `ios/Pulse/LiveActivityManagerBridge.m`
- `lib/liveActivityNew.ts`

## Why This Fixes the Issue
React Native's bridge system expects:
1. Required parameters first
2. Optional parameters last (before resolver/rejecter)
3. Resolver and rejecter are automatically handled by the bridge

By reordering the parameters so that all required parameters come first and optional parameters come last, React Native can properly map the JavaScript arguments to the Objective-C method parameters.

## Testing
The app should now build and run without the native module conversion error. The live activity functionality should work as expected.
