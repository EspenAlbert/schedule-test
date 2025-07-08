# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 12 seconds
```
2025-07-01T08:50:28.2751277Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T08:50:28.2752502Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-01T08:50:28.2768164Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T08:50:28.2774546Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.81s)
```
#### PASS 10 seconds
```
2025-07-01T12:50:20.6083002Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T12:50:20.6083631Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-01T12:50:20.6092513Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T12:50:20.6094764Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.77s)
```
#### PASS 12 seconds
```
2025-07-01T17:50:24.3501200Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T17:50:24.3502595Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-01T17:50:24.3518047Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-01T17:50:24.3523276Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.07s)
```
### 2025-07-02
#### PASS 9 seconds
```
2025-07-02T00:46:31.9230047Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-02T00:46:31.9231256Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-02T00:46:31.9245504Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-02T00:46:31.9252528Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (9.73s)
```
### 2025-07-03
#### PASS 10 seconds
```
2025-07-03T00:46:39.9553216Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-03T00:46:39.9553856Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-03T00:46:39.9565715Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-03T00:46:39.9568553Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.32s)
```
### 2025-07-04
#### PASS 9 seconds
```
2025-07-04T00:51:07.7067283Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-04T00:51:07.7067941Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-04T00:51:07.7078009Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-04T00:51:07.7082130Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (9.81s)
```
### 2025-07-05
#### PASS 12 seconds
```
2025-07-05T00:44:07.5886796Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-05T00:44:07.5887947Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-05T00:44:07.5902336Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-05T00:44:07.5908649Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.57s)
```
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0089077Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0089709Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-06T00:48:43.0097695Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0143480Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-06T00:48:43.0144031Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0144379Z         
2025-07-06T00:48:43.0144639Z         Error: error creating resource
2025-07-06T00:48:43.0144897Z         
2025-07-06T00:48:43.0145220Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0145865Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0146462Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0146768Z         
2025-07-06T00:48:43.0147248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0148004Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0148576Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0148949Z         BadRequestDetail: 
2025-07-06T00:48:43.0160203Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/571f2434-2bee-44d0-b41d-cfc3e67d82b8/terraform test_working_directory=/tmp/plugintest3822302746
2025-07-06T00:48:43.0202826Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (31.01s)
```
### 2025-07-07
#### PASS 9 seconds
```
2025-07-07T00:48:05.7822007Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-07T00:48:05.7822756Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-07T00:48:05.7831478Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-07T00:48:05.7835290Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (9.88s)
```
### 2025-07-08
#### PASS 10 seconds
```
2025-07-08T00:45:56.1182944Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-08T00:45:56.1184203Z     resource_test.go:171: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-07-08T00:45:56.1197922Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-07-08T00:45:56.1205041Z     --- PASS: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.32s)
```