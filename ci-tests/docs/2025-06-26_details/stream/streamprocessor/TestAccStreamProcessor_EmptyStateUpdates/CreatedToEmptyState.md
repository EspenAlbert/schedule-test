# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 6 seconds
```
2025-06-20T00:45:53.6878837Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-20T00:45:53.6879681Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-20T00:45:53.6885158Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-20T00:45:53.6887072Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.31s)
```
### 2025-06-21
#### PASS 6 seconds
```
2025-06-21T00:43:49.5499109Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-21T00:43:49.5500669Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-21T00:43:49.5510691Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-21T00:43:49.5514144Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.32s)
```
### 2025-06-22
#### FAIL 30 seconds
```
2025-06-22T00:49:55.8389324Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8390156Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-22T00:49:55.8395675Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8424684Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-22T00:49:55.8425229Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8425577Z         
2025-06-22T00:49:55.8425840Z         Error: error creating resource
2025-06-22T00:49:55.8426096Z         
2025-06-22T00:49:55.8426421Z           with mongodbatlas_stream_instance.instance,
2025-06-22T00:49:55.8427069Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-06-22T00:49:55.8427667Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-06-22T00:49:55.8427970Z         
2025-06-22T00:49:55.8428458Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efbaf7a0954e84ae563/streams
2025-06-22T00:49:55.8429118Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8429686Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8430058Z         BadRequestDetail: 
2025-06-22T00:49:55.8442998Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest733097844 test_step_number=1
2025-06-22T00:49:55.8452803Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (30.76s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:45:53.8897866Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-23T00:45:53.8899355Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-23T00:45:53.8908828Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-23T00:45:53.8912341Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (8.62s)
```
### 2025-06-24
#### PASS 5 seconds
```
2025-06-24T00:45:42.3263783Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-24T00:45:42.3264627Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-24T00:45:42.3270147Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-24T00:45:42.3272043Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (5.81s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:45:03.6138694Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-25T00:45:03.6140223Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-25T00:45:03.6149601Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-25T00:45:03.6153162Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.54s)
```
#### PASS 6 seconds
```
2025-06-25T06:57:33.8327264Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-25T06:57:33.8328267Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-25T06:57:33.8333737Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-25T06:57:33.8335766Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.48s)
```
### 2025-06-26
#### PASS 6 seconds
```
2025-06-26T00:44:37.3213852Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-26T00:44:37.3214760Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-26T00:44:37.3220343Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-26T00:44:37.3222665Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.11s)
```
#### PASS 6 seconds
```
2025-06-26T04:28:17.6424609Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-26T04:28:17.6425463Z     resource_test.go:209: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-06-26T04:28:17.6430848Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-06-26T04:28:17.6432908Z     --- PASS: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (6.62s)
```