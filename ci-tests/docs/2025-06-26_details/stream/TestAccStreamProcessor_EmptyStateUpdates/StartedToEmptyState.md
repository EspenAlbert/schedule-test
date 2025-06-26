# stream/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 11 seconds
```
2025-06-20T00:45:53.6880846Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-20T00:45:53.6881796Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-20T00:45:53.6886080Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-20T00:45:53.6888299Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.78s)
```
### 2025-06-21
#### PASS 11 seconds
```
2025-06-21T00:43:49.5502808Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-21T00:43:49.5504351Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-21T00:43:49.5512408Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-21T00:43:49.5516355Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.83s)
```
### 2025-06-22
#### FAIL 38 seconds
```
2025-06-22T00:49:55.8391312Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8392314Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-22T00:49:55.8396583Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8407079Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest3801855713
2025-06-22T00:49:55.8444017Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-22T00:49:55.8444563Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8444906Z         
2025-06-22T00:49:55.8445170Z         Error: error creating resource
2025-06-22T00:49:55.8445425Z         
2025-06-22T00:49:55.8445766Z           with mongodbatlas_stream_processor.processor,
2025-06-22T00:49:55.8446432Z           on terraform_plugin_test.tf line 28, in resource "mongodbatlas_stream_processor" "processor":
2025-06-22T00:49:55.8447051Z           28: 		resource "mongodbatlas_stream_processor" "processor" {
2025-06-22T00:49:55.8447359Z         
2025-06-22T00:49:55.8448134Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams/test-acc-tf-449998150795679024--STARTED-/processor
2025-06-22T00:49:55.8449012Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-06-22T00:49:55.8449725Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-06-22T00:49:55.8450330Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-06-22T00:49:55.8450936Z         [processor-started-to- An internal error occurred], BadRequestDetail: 
2025-06-22T00:49:55.8453400Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (38.26s)
```
### 2025-06-23
#### PASS 14 seconds
```
2025-06-23T00:45:53.8901405Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-23T00:45:53.8902876Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-23T00:45:53.8910647Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-23T00:45:53.8913604Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (14.11s)
```
### 2025-06-24
#### PASS 11 seconds
```
2025-06-24T00:45:42.3265784Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-24T00:45:42.3266613Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-24T00:45:42.3271076Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-24T00:45:42.3273276Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.46s)
```
### 2025-06-25
#### PASS 11 seconds
```
2025-06-25T00:45:03.6142308Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-25T00:45:03.6143798Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-25T00:45:03.6151425Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-25T00:45:03.6155509Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.60s)
```
#### PASS 11 seconds
```
2025-06-25T06:57:33.8329490Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-25T06:57:33.8330337Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-25T06:57:33.8334732Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-25T06:57:33.8337193Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.84s)
```
### 2025-06-26
#### PASS 11 seconds
```
2025-06-26T00:44:37.3216014Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-26T00:44:37.3216880Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-26T00:44:37.3221606Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-26T00:44:37.3223976Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (11.79s)
```
#### PASS 12 seconds
```
2025-06-26T04:28:17.6426641Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-26T04:28:17.6427473Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-06-26T04:28:17.6431795Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-06-26T04:28:17.6434160Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (12.00s)
```