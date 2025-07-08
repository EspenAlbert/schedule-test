# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 10 seconds
#### PASS 12 seconds
### 2025-07-02
#### PASS 9 seconds
### 2025-07-03
#### PASS 10 seconds
### 2025-07-04
#### PASS 9 seconds
### 2025-07-05
#### PASS 12 seconds
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
### 2025-07-08
#### PASS 10 seconds