# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 38) FAIL(x 3)
Success rate: 92.68%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-3534309571921030123 | qa | flaky_500 | 32.04s
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams/test-acc-tf-5092913913469404921 | qa | flaky_500 | 32.04s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393d426db7026b5b1cb4/streams | qa | flaky_500 | 30.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-26
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-27 PASS 2 seconds
- 2025-06-28 PASS 3 seconds
- 2025-06-29 PASS 2 seconds
- 2025-06-30 PASS 3 seconds
- 2025-07-01
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS 2 seconds
- 2025-07-04 PASS 2 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
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

- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10
  - PASS 3 seconds
  - FAIL 32 seconds

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3754890Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-10T13:24:52.3758063Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-10T13:24:52.3784151Z === NAME  TestAccStreamRSStreamInstance_basic
2025-07-10T13:24:52.3784817Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3785301Z         
2025-07-10T13:24:52.3785581Z         Error: error during resource delete
2025-07-10T13:24:52.3785849Z         
2025-07-10T13:24:52.3786520Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68ef/streams/test-acc-tf-5092913913469404921
2025-07-10T13:24:52.3787283Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3787886Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3788284Z         BadRequestDetail: 
2025-07-10T13:24:52.3788577Z --- FAIL: TestAccStreamRSStreamInstance_basic (32.40s)
```

- 2025-07-11 PASS 2 seconds
- 2025-07-12 PASS 2 seconds
- 2025-07-13 PASS 2 seconds
- 2025-07-14 PASS 2 seconds
- 2025-07-15 PASS 2 seconds
- 2025-07-16 PASS 3 seconds
- 2025-07-17 PASS 2 seconds
- 2025-07-18 PASS 3 seconds
- 2025-07-19 PASS 2 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.6914705Z === RUN   TestAccStreamRSStreamInstance_basic
2025-07-20T00:53:03.6917613Z === CONT  TestAccStreamRSStreamInstance_basic
2025-07-20T00:53:03.6929139Z === NAME  TestAccStreamRSStreamInstance_basic
2025-07-20T00:53:03.6929951Z     resource_stream_instance_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.6930745Z         
2025-07-20T00:53:03.6931127Z         Error: error creating resource
2025-07-20T00:53:03.6931401Z         
2025-07-20T00:53:03.6931711Z           with mongodbatlas_stream_instance.test,
2025-07-20T00:53:03.6932332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-07-20T00:53:03.6932911Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-20T00:53:03.6933213Z         
2025-07-20T00:53:03.6933706Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393d426db7026b5b1cb4/streams
2025-07-20T00:53:03.6934375Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:53:03.6934950Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:53:03.6935337Z         BadRequestDetail: 
2025-07-20T00:53:03.6945924Z    test_working_directory=/tmp/plugintest764139182 test_step_number=1 test_name=TestAccStreamDSStreamInstances_basic
2025-07-20T00:53:03.6952377Z --- FAIL: TestAccStreamRSStreamInstance_basic (30.85s)
```

- 2025-07-21 PASS 3 seconds
- 2025-07-22 PASS 2 seconds
- 2025-07-23
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-07-24 PASS 2 seconds