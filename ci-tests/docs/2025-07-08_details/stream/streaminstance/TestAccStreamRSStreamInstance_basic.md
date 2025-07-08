# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-07-02
#### PASS 2 seconds
### 2025-07-03
#### PASS 2 seconds
### 2025-07-04
#### PASS 2 seconds
### 2025-07-05
#### PASS 2 seconds
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
### 2025-07-08
#### PASS 2 seconds