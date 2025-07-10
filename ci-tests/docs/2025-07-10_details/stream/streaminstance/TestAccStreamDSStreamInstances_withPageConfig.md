# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 125) FAIL(x 7)
Success rate: 94.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-895356617966488337 | dev | flaky_500 | 3.05s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-1285885677898525680 | qa | flaky_500 | 3.09s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-7404287678702829769 | dev | flaky_500 | 3.08s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-1843478139919792449 | dev | flaky_500 | 3.00s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams/test-acc-tf-8018974745125131532 | qa | flaky_500 | 32.06s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams | qa | flaky_500 | 30.09s

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
2025-04-16T00:45:12.3266107Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T00:45:12.3270020Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T00:45:12.3312878Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T00:45:12.3313585Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3314224Z         
2025-04-16T00:45:12.3314525Z         Error: error during resource delete
2025-04-16T00:45:12.3314802Z         
2025-04-16T00:45:12.3315476Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-895356617966488337
2025-04-16T00:45:12.3316238Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3316828Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3317246Z         BadRequestDetail: 
2025-04-16T00:45:12.3317589Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (3.47s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8322126Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T12:49:32.8325995Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T12:49:32.8352447Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T12:49:32.8353152Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8353662Z         
2025-04-16T12:49:32.8353952Z         Error: error during resource delete
2025-04-16T12:49:32.8354226Z         
2025-04-16T12:49:32.8354904Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-1285885677898525680
2025-04-16T12:49:32.8355675Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8356275Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8356690Z         BadRequestDetail: 
2025-04-16T12:49:32.8357035Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (3.91s)
```

  - FAIL 3 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0314051Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T14:37:27.0317676Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T14:37:27.0329587Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-04-16T14:37:27.0330312Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0330831Z         
2025-04-16T14:37:27.0331132Z         Error: error during resource delete
2025-04-16T14:37:27.0331416Z         
2025-04-16T14:37:27.0332250Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-7404287678702829769
2025-04-16T14:37:27.0333058Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0333798Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0334220Z         BadRequestDetail: 
2025-04-16T14:37:27.0334564Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (3.78s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9301668Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-04-17T00:44:44.9305687Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-04-17T00:44:44.9316775Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-04-17T00:44:44.9317487Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9318255Z         
2025-04-17T00:44:44.9318576Z         Error: error during resource delete
2025-04-17T00:44:44.9318865Z         
2025-04-17T00:44:44.9319562Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-1843478139919792449
2025-04-17T00:44:44.9320341Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9320949Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9321369Z         BadRequestDetail: 
2025-04-17T00:44:44.9321710Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (3.01s)
```

- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 3 seconds
- 2025-04-20 PASS 3 seconds
- 2025-04-21 PASS 3 seconds
- 2025-04-22 PASS 3 seconds
- 2025-04-23 PASS 3 seconds
- 2025-04-24 PASS 3 seconds
- 2025-04-25 PASS 3 seconds
- 2025-04-26 PASS 4 seconds
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 3 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-02 PASS 3 seconds
- 2025-05-03 PASS 3 seconds
- 2025-05-04 PASS 3 seconds
- 2025-05-05
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-06 PASS 3 seconds
- 2025-05-07
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-08 PASS 3 seconds
- 2025-05-09 PASS 3 seconds
- 2025-05-10 PASS 3 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.8363867Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-05-11T00:29:58.8364985Z     data_source_stream_instances_test.go:42: Creating execution project: test-acc-tf-p-6616431553446629223
2025-05-11T00:29:58.8365979Z     data_source_stream_instances_test.go:42: 
2025-05-11T00:29:58.8367539Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8370562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8374191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:42
2025-05-11T00:29:58.8375504Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8376960Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8378042Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2025-05-11T00:29:58.8379951Z         	Messages:   	Project creation failed: test-acc-tf-p-6616431553446629223, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8381268Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (0.03s)
```

- 2025-05-12 PASS 3 seconds
- 2025-05-13
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-14 PASS 3 seconds
- 2025-05-15 PASS 3 seconds
- 2025-05-16 PASS 3 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 4 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-21 PASS 3 seconds
- 2025-05-22
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-05-23 PASS 4 seconds
- 2025-05-24 PASS 3 seconds
- 2025-05-25 PASS 3 seconds
- 2025-05-26 PASS 3 seconds
- 2025-05-27
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-05-28
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-05-29
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-30
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-31 PASS 3 seconds
- 2025-06-01
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-06-03
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-06-04 PASS 3 seconds
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
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.8275094Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8279595Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8351456Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-06-22T00:49:55.8352548Z     data_source_stream_instances_test.go:50: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8353057Z         
2025-06-22T00:49:55.8353337Z         Error: error during resource delete
2025-06-22T00:49:55.8353601Z         
2025-06-22T00:49:55.8354262Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams/test-acc-tf-8018974745125131532
2025-06-22T00:49:55.8355026Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8355606Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8356001Z         BadRequestDetail: 
2025-06-22T00:49:55.8356332Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (32.58s)
```

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
2025-07-06T00:48:43.0018854Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0022622Z === CONT  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0035644Z === NAME  TestAccStreamDSStreamInstances_withPageConfig
2025-07-06T00:48:43.0036234Z     data_source_stream_instances_test.go:50: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:48:43.0036647Z         
2025-07-06T00:48:43.0036918Z         Error: error creating resource
2025-07-06T00:48:43.0037188Z         
2025-07-06T00:48:43.0037740Z           with mongodbatlas_stream_instance.test,
2025-07-06T00:48:43.0038363Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-07-06T00:48:43.0038936Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-07-06T00:48:43.0039243Z         
2025-07-06T00:48:43.0039729Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams
2025-07-06T00:48:43.0040388Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0040959Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0041343Z         BadRequestDetail: 
2025-07-06T00:48:43.0041673Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (30.86s)
```

- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10 PASS 3 seconds