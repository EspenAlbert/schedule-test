# stream/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 10 seconds
```
2025-06-20T00:45:53.6882964Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-20T00:45:53.6883784Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-20T00:45:53.6885618Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-20T00:45:53.6887692Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.91s)
```
### 2025-06-21
#### PASS 11 seconds
```
2025-06-21T00:43:49.5506470Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-21T00:43:49.5507998Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-21T00:43:49.5511555Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-21T00:43:49.5515255Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (11.09s)
```
### 2025-06-22
#### FAIL 30 seconds
```
2025-06-22T00:49:55.8393612Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8394530Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-22T00:49:55.8396130Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8407775Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-22T00:49:55.8408327Z     resource_test.go:210: Step 1/3 error: Error running apply: exit status 1
2025-06-22T00:49:55.8408675Z         
2025-06-22T00:49:55.8408941Z         Error: error creating resource
2025-06-22T00:49:55.8409187Z         
2025-06-22T00:49:55.8409510Z           with mongodbatlas_stream_instance.instance,
2025-06-22T00:49:55.8410157Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-06-22T00:49:55.8410745Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-06-22T00:49:55.8411051Z         
2025-06-22T00:49:55.8411539Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams
2025-06-22T00:49:55.8412411Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8412978Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8413357Z         BadRequestDetail: 
2025-06-22T00:49:55.8424376Z   
2025-06-22T00:49:55.8452082Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (30.71s)
```
### 2025-06-23
#### PASS 14 seconds
```
2025-06-23T00:45:53.8905109Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-23T00:45:53.8906586Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-23T00:45:53.8909797Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-23T00:45:53.8914706Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (14.34s)
```
### 2025-06-24
#### PASS 10 seconds
```
2025-06-24T00:45:42.3267751Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-24T00:45:42.3268573Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-24T00:45:42.3270609Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-24T00:45:42.3272661Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.05s)
```
### 2025-06-25
#### PASS 11 seconds
```
2025-06-25T00:45:03.6146011Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-25T00:45:03.6147510Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-25T00:45:03.6150424Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-25T00:45:03.6154261Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (11.04s)
```
#### PASS 10 seconds
```
2025-06-25T06:57:33.8331544Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-25T06:57:33.8332389Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-25T06:57:33.8334239Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-25T06:57:33.8336421Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.71s)
```
### 2025-06-26
#### PASS 10 seconds
```
2025-06-26T00:44:37.3218123Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-26T00:44:37.3218989Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-26T00:44:37.3221085Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-26T00:44:37.3223326Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.62s)
```
#### PASS 11 seconds
```
2025-06-26T04:28:17.6428795Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-26T04:28:17.6429669Z     resource_test.go:209: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-06-26T04:28:17.6431319Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-06-26T04:28:17.6433539Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (11.35s)
```