# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 12 seconds
#### PASS 14 seconds
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 12 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 14 seconds
### 2025-07-06
#### FAIL 31 seconds
```
2025-07-06T00:48:43.0090868Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0091580Z     resource_test.go:171: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-07-06T00:48:43.0096620Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161195Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-07-06T00:48:43.0161756Z     resource_test.go:172: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0162104Z         
2025-07-06T00:48:43.0162366Z         Error: error creating resource
2025-07-06T00:48:43.0162624Z         
2025-07-06T00:48:43.0162956Z           with mongodbatlas_stream_connection.sample,
2025-07-06T00:48:43.0163605Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_stream_connection" "sample":
2025-07-06T00:48:43.0164206Z           23: 		resource "mongodbatlas_stream_connection" "sample" {
2025-07-06T00:48:43.0164522Z         
2025-07-06T00:48:43.0165339Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams/test-acc-tf-2928671464252808851--STARTED-STARTED/connections
2025-07-06T00:48:43.0166348Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0166915Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0167287Z         BadRequestDetail: 
2025-07-06T00:48:43.0179235Z   
2025-07-06T00:48:43.0204193Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (31.54s)
```
### 2025-07-07
#### PASS 12 seconds
### 2025-07-08
#### PASS 12 seconds