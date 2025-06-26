# stream/streamconnection/TestAccStreamStreamConnection_https Test Details
# Found 9 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 9 seconds
```
2025-06-20T00:45:53.6821179Z === RUN   TestAccStreamStreamConnection_https
2025-06-20T00:45:53.6829396Z === CONT  TestAccStreamStreamConnection_https
2025-06-20T00:45:53.6838517Z --- PASS: TestAccStreamStreamConnection_https (9.81s)
```
### 2025-06-21
#### PASS 9 seconds
```
2025-06-21T00:43:49.5376845Z === RUN   TestAccStreamStreamConnection_https
2025-06-21T00:43:49.5413702Z === CONT  TestAccStreamStreamConnection_https
2025-06-21T00:43:49.5424021Z --- PASS: TestAccStreamStreamConnection_https (9.81s)
```
### 2025-06-22
#### FAIL a minute
```
2025-06-22T00:49:55.7953854Z === RUN   TestAccStreamStreamConnection_https
2025-06-22T00:49:55.7958210Z === CONT  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8081437Z === NAME  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8082181Z     resource_stream_connection_test.go:207: Step 1/4 error: Error running apply: exit status 1
2025-06-22T00:49:55.8082638Z         
2025-06-22T00:49:55.8082956Z         Error: error creating resource
2025-06-22T00:49:55.8083271Z         
2025-06-22T00:49:55.8083600Z           with mongodbatlas_stream_connection.test,
2025-06-22T00:49:55.8084366Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_stream_connection" "test":
2025-06-22T00:49:55.8085078Z           21: 		resource "mongodbatlas_stream_connection" "test" {
2025-06-22T00:49:55.8085465Z         
2025-06-22T00:49:55.8086338Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8036604075840678755/connections
2025-06-22T00:49:55.8087305Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8087984Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8088370Z         BadRequestDetail: 
2025-06-22T00:49:55.8100195Z    test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_step_number=1
2025-06-22T00:49:55.8210718Z === NAME  TestAccStreamStreamConnection_https
2025-06-22T00:49:55.8211273Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8211686Z         
2025-06-22T00:49:55.8212176Z         Error: error during resource delete
2025-06-22T00:49:55.8212456Z         
2025-06-22T00:49:55.8213114Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-8036604075840678755
2025-06-22T00:49:55.8213869Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8214456Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8214853Z         BadRequestDetail: 
2025-06-22T00:49:55.8215147Z --- FAIL: TestAccStreamStreamConnection_https (62.52s)
```
### 2025-06-23
#### PASS 12 seconds
```
2025-06-23T00:45:53.8804622Z === RUN   TestAccStreamStreamConnection_https
2025-06-23T00:45:53.8812243Z === CONT  TestAccStreamStreamConnection_https
2025-06-23T00:45:53.8827473Z --- PASS: TestAccStreamStreamConnection_https (12.85s)
```
### 2025-06-24
#### PASS 9 seconds
```
2025-06-24T00:45:42.3193154Z === RUN   TestAccStreamStreamConnection_https
2025-06-24T00:45:42.3214607Z === CONT  TestAccStreamStreamConnection_https
2025-06-24T00:45:42.3223234Z --- PASS: TestAccStreamStreamConnection_https (9.31s)
```
### 2025-06-25
#### PASS 10 seconds
```
2025-06-25T00:45:03.6046805Z === RUN   TestAccStreamStreamConnection_https
2025-06-25T00:45:03.6057220Z === CONT  TestAccStreamStreamConnection_https
2025-06-25T00:45:03.6069487Z --- PASS: TestAccStreamStreamConnection_https (10.20s)
```
#### PASS 9 seconds
```
2025-06-25T06:57:33.8268226Z === RUN   TestAccStreamStreamConnection_https
2025-06-25T06:57:33.8274547Z === CONT  TestAccStreamStreamConnection_https
2025-06-25T06:57:33.8283208Z --- PASS: TestAccStreamStreamConnection_https (9.99s)
```
### 2025-06-26
#### PASS 9 seconds
```
2025-06-26T00:44:37.3155299Z === RUN   TestAccStreamStreamConnection_https
2025-06-26T00:44:37.3161689Z === CONT  TestAccStreamStreamConnection_https
2025-06-26T00:44:37.3170052Z --- PASS: TestAccStreamStreamConnection_https (9.05s)
```
#### PASS 9 seconds
```
2025-06-26T04:28:17.6369112Z === RUN   TestAccStreamStreamConnection_https
2025-06-26T04:28:17.6373570Z === CONT  TestAccStreamStreamConnection_https
2025-06-26T04:28:17.6383744Z --- PASS: TestAccStreamStreamConnection_https (9.71s)
```