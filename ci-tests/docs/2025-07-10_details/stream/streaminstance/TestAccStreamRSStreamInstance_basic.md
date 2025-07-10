# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-8117233874825435767 | dev | flaky_500 | 3.07s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-3426254479106208352 | qa | flaky_500 | 4.01s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-7436582483119960616 | dev | flaky_500 | 4.02s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-4225733576999486011 | dev | flaky_500 | 3.06s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-3534309571921030123 | qa | flaky_500 | 32.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 seconds
- 2025-04-13 PASS 3 seconds
- 2025-04-14 PASS 3 seconds
- 2025-04-15 PASS 3 seconds
- 2025-04-16
  - FAIL 3 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3267519Z === RUN   TestAccStreamRSStreamInstance_basic
2025-04-16T00:45:12.3270375Z === CONT  TestAccStreamRSStreamInstance_basic
2025-04-16T00:45:12.3343138Z === NAME  TestAccStreamRSStreamInstance_basic
2025-04-16T00:45:12.3343987Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3344502Z         
2025-04-16T00:45:12.3344806Z         Error: error during resource delete
2025-04-16T00:45:12.3345075Z         
2025-04-16T00:45:12.3345790Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-8117233874825435767
2025-04-16T00:45:12.3346558Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3347150Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3347564Z         BadRequestDetail: 
2025-04-16T00:45:12.3347871Z --- FAIL: TestAccStreamRSStreamInstance_basic (3.74s)
```

  - FAIL 4 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8323533Z === RUN   TestAccStreamRSStreamInstance_basic
2025-04-16T12:49:32.8325639Z === CONT  TestAccStreamRSStreamInstance_basic
2025-04-16T12:49:32.8382690Z === NAME  TestAccStreamRSStreamInstance_basic
2025-04-16T12:49:32.8383361Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8383859Z         
2025-04-16T12:49:32.8384292Z         Error: error during resource delete
2025-04-16T12:49:32.8384577Z         
2025-04-16T12:49:32.8385255Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-3426254479106208352
2025-04-16T12:49:32.8386059Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8386652Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8387067Z         BadRequestDetail: 
2025-04-16T12:49:32.8387395Z --- FAIL: TestAccStreamRSStreamInstance_basic (4.10s)
```

  - FAIL 4 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0315580Z === RUN   TestAccStreamRSStreamInstance_basic
2025-04-16T14:37:27.0318733Z === CONT  TestAccStreamRSStreamInstance_basic
2025-04-16T14:37:27.0329323Z   
2025-04-16T14:37:27.0365053Z === NAME  TestAccStreamRSStreamInstance_basic
2025-04-16T14:37:27.0365732Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0366236Z         
2025-04-16T14:37:27.0366528Z         Error: error during resource delete
2025-04-16T14:37:27.0366802Z         
2025-04-16T14:37:27.0367489Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-7436582483119960616
2025-04-16T14:37:27.0368272Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0368867Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0369294Z         BadRequestDetail: 
2025-04-16T14:37:27.0374665Z    test_step_number=2 test_name=TestAccStreamRSStreamInstance_withStreamConfig test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform
2025-04-16T14:37:27.0380084Z --- FAIL: TestAccStreamRSStreamInstance_basic (4.17s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9303080Z === RUN   TestAccStreamRSStreamInstance_basic
2025-04-17T00:44:44.9306368Z === CONT  TestAccStreamRSStreamInstance_basic
2025-04-17T00:44:44.9316082Z    test_name=TestAccStreamDSStreamInstances_withPageConfig test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform
2025-04-17T00:44:44.9377819Z === NAME  TestAccStreamRSStreamInstance_basic
2025-04-17T00:44:44.9378703Z     resource_stream_instance_test.go:19: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9379210Z         
2025-04-17T00:44:44.9379504Z         Error: error during resource delete
2025-04-17T00:44:44.9379779Z         
2025-04-17T00:44:44.9380479Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-4225733576999486011
2025-04-17T00:44:44.9381284Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9381898Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9382316Z         BadRequestDetail: 
2025-04-17T00:44:44.9382632Z --- FAIL: TestAccStreamRSStreamInstance_basic (3.58s)
```

- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 3 seconds
- 2025-04-20 PASS 3 seconds
- 2025-04-21 PASS 4 seconds
- 2025-04-22 PASS 4 seconds
- 2025-04-23 PASS 3 seconds
- 2025-04-24 PASS 4 seconds
- 2025-04-25 PASS 3 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 3 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-05-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-02 PASS 3 seconds
- 2025-05-03 PASS 3 seconds
- 2025-05-04 PASS 3 seconds
- 2025-05-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-06 PASS 3 seconds
- 2025-05-07
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-08 PASS 4 seconds
- 2025-05-09 PASS 3 seconds
- 2025-05-10 PASS 3 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.8401100Z === RUN   TestAccStreamRSStreamInstance_basic
2025-05-11T00:29:58.8402174Z     resource_stream_instance_test.go:16: Creating execution project: test-acc-tf-p-3585098206376577532
2025-05-11T00:29:58.8402981Z     resource_stream_instance_test.go:16: 
2025-05-11T00:29:58.8404461Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8407560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8411231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:16
2025-05-11T00:29:58.8412890Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8414411Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8415287Z         	Test:       	TestAccStreamRSStreamInstance_basic
2025-05-11T00:29:58.8417107Z         	Messages:   	Project creation failed: test-acc-tf-p-3585098206376577532, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8418286Z --- FAIL: TestAccStreamRSStreamInstance_basic (0.02s)
```

- 2025-05-12 PASS 4 seconds
- 2025-05-13
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-14 PASS 3 seconds
- 2025-05-15 PASS 4 seconds
- 2025-05-16 PASS 3 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 4 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-21 PASS 4 seconds
- 2025-05-22
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-05-23 PASS 4 seconds
- 2025-05-24 PASS 3 seconds
- 2025-05-25 PASS 3 seconds
- 2025-05-26 PASS 4 seconds
- 2025-05-27
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-28
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-05-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-30
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-31 PASS 3 seconds
- 2025-06-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-03
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-06-04 PASS 4 seconds
- 2025-06-05 PASS 2 seconds
- 2025-06-06 PASS 2 seconds
- 2025-06-07 PASS 2 seconds
- 2025-06-08 PASS 2 seconds
- 2025-06-09 PASS 2 seconds
- 2025-06-10 PASS 3 seconds
- 2025-06-11
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-06-12 PASS 2 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 2 seconds
- 2025-06-15 PASS 3 seconds
- 2025-06-16 PASS 2 seconds
- 2025-06-17 PASS 2 seconds
- 2025-06-18
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-06-19 PASS 2 seconds
- 2025-06-20 PASS 2 seconds
- 2025-06-21 PASS 2 seconds
- 2025-06-22 PASS 2 seconds
- 2025-06-23 PASS 3 seconds
- 2025-06-24 PASS 2 seconds
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
- 2025-07-10 PASS 3 seconds