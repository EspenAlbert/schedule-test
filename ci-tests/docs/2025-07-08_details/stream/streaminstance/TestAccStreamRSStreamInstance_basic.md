# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 10 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 9) FAIL
Success rate: 90.00%

## Timeline
### 2025-07-01
#### PASS 3 seconds
```
2025-07-01T08:50:28.2716093Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-01T08:50:28.2721932Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-01T08:50:28.2725204Z --- PASS: TestAccStreamRSStreamInstance_basic (3.53s)
```
#### PASS 2 seconds
```
2025-07-01T12:50:20.6064111Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-01T12:50:20.6066471Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-01T12:50:20.6069430Z --- PASS: TestAccStreamRSStreamInstance_basic (2.72s)
```
#### PASS 2 seconds
```
2025-07-01T17:50:24.3467455Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-01T17:50:24.3473274Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-01T17:50:24.3476114Z --- PASS: TestAccStreamRSStreamInstance_basic (2.82s)
```
### 2025-07-02
#### PASS 2 seconds
```
2025-07-02T00:46:31.9192449Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-02T00:46:31.9196795Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-02T00:46:31.9202362Z --- PASS: TestAccStreamRSStreamInstance_basic (2.58s)
```
### 2025-07-03
#### PASS 2 seconds
```
2025-07-03T00:46:39.9532311Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-03T00:46:39.9535042Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-03T00:46:39.9536815Z --- PASS: TestAccStreamRSStreamInstance_basic (2.72s)
```
### 2025-07-04
#### PASS 2 seconds
```
2025-07-04T00:45:55.5460573Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-04T00:45:55.5463994Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-04T00:45:55.5465588Z --- PASS: TestAccStreamRSStreamInstance_basic (2.64s)
```
### 2025-07-05
#### PASS 2 seconds
```
2025-07-05T00:44:07.5853491Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-05T00:44:07.5859216Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-05T00:44:07.5861285Z --- PASS: TestAccStreamRSStreamInstance_basic (2.86s)
```
### 2025-07-06
#### FAIL 32 seconds
```
2025-07-06T00:48:43.0020208Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-06T00:48:43.0022960Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-06T00:48:43.0066939Z === NAME  TestAccStreamRSStreamInstance_basic
2025-07-06T00:48:43.0067701Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0068200Z         
2025-07-06T00:48:43.0068477Z         Error: error during resource delete
2025-07-06T00:48:43.0068741Z         
2025-07-06T00:48:43.0069401Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-3534309571921030123
2025-07-06T00:48:43.0070150Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0070871Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0071276Z         BadRequestDetail: 
2025-07-06T00:48:43.0071576Z --- FAIL: TestAccStreamRSStreamInstance_basic (32.44s)
```
### 2025-07-07
#### PASS 2 seconds
```
2025-07-07T00:48:05.7802299Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-07T00:48:05.7805560Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-07T00:48:05.7807277Z --- PASS: TestAccStreamRSStreamInstance_basic (2.54s)
```
### 2025-07-08
#### PASS 2 seconds
```
2025-07-08T00:45:56.1149192Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-08T00:45:56.1154113Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-08T00:45:56.1156983Z --- PASS: TestAccStreamRSStreamInstance_basic (2.51s)
```