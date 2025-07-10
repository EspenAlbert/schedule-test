# stream/streaminstance/TestAccStreamDSStreamInstance_basic Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-7327131375876751948 | dev | flaky_500 | 5.05s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-2421709214986001114 | qa | flaky_500 | 6.09s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-8681710157949496342 | dev | flaky_500 | 8.08s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-1634959148710391290 | dev | flaky_500 | 4.10s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.01s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams | qa | flaky_500 | 33.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - FAIL 5 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.3263626Z === RUN   TestAccStreamDSStreamInstance_basic
2025-04-16T00:45:12.3264440Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-7756871261013687566
2025-04-16T00:45:12.3268955Z === CONT  TestAccStreamDSStreamInstance_basic
2025-04-16T00:45:12.3323625Z === NAME  TestAccStreamDSStreamInstance_basic
2025-04-16T00:45:12.3324554Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3325059Z         
2025-04-16T00:45:12.3325511Z         Error: error during resource delete
2025-04-16T00:45:12.3325785Z         
2025-04-16T00:45:12.3326471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-7327131375876751948
2025-04-16T00:45:12.3327239Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3327843Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3328256Z         BadRequestDetail: 
2025-04-16T00:45:12.3328558Z --- FAIL: TestAccStreamDSStreamInstance_basic (5.49s)
```

  - FAIL 6 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8319853Z === RUN   TestAccStreamDSStreamInstance_basic
2025-04-16T12:49:32.8320583Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-3751311937716142640
2025-04-16T12:49:32.8324983Z === CONT  TestAccStreamDSStreamInstance_basic
2025-04-16T12:49:32.8367600Z === NAME  TestAccStreamDSStreamInstance_basic
2025-04-16T12:49:32.8368275Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8368783Z         
2025-04-16T12:49:32.8369237Z         Error: error during resource delete
2025-04-16T12:49:32.8369580Z         
2025-04-16T12:49:32.8370263Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-2421709214986001114
2025-04-16T12:49:32.8371034Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8371636Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8372047Z         BadRequestDetail: 
2025-04-16T12:49:32.8372367Z --- FAIL: TestAccStreamDSStreamInstance_basic (6.87s)
```

  - FAIL 8 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0311680Z === RUN   TestAccStreamDSStreamInstance_basic
2025-04-16T14:37:27.0312294Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-6175991661737352171
2025-04-16T14:37:27.0317009Z === CONT  TestAccStreamDSStreamInstance_basic
2025-04-16T14:37:27.0391543Z === NAME  TestAccStreamDSStreamInstance_basic
2025-04-16T14:37:27.0392230Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0392760Z         
2025-04-16T14:37:27.0393050Z         Error: error during resource delete
2025-04-16T14:37:27.0393337Z         
2025-04-16T14:37:27.0394261Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-8681710157949496342
2025-04-16T14:37:27.0395052Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0395656Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0396071Z         BadRequestDetail: 
2025-04-16T14:37:27.0396379Z --- FAIL: TestAccStreamDSStreamInstance_basic (8.81s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9299501Z === RUN   TestAccStreamDSStreamInstance_basic
2025-04-17T00:44:44.9300130Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-7399374498198427101
2025-04-17T00:44:44.9304638Z === CONT  TestAccStreamDSStreamInstance_basic
2025-04-17T00:44:44.9347384Z === NAME  TestAccStreamDSStreamInstance_basic
2025-04-17T00:44:44.9348250Z     data_source_stream_instance_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9348771Z         
2025-04-17T00:44:44.9349075Z         Error: error during resource delete
2025-04-17T00:44:44.9349352Z         
2025-04-17T00:44:44.9350042Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-1634959148710391290
2025-04-17T00:44:44.9350975Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9351588Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9352011Z         BadRequestDetail: 
2025-04-17T00:44:44.9352321Z --- FAIL: TestAccStreamDSStreamInstance_basic (4.99s)
```

- 2025-04-18 PASS 11 seconds
- 2025-04-19 PASS 7 seconds
- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 5 seconds
- 2025-04-24 PASS 10 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 5 seconds
- 2025-04-28 PASS 5 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 9 seconds
  - PASS 5 seconds
- 2025-05-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 5 seconds
- 2025-05-05
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 7 seconds
- 2025-05-07
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 7 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.8223182Z === RUN   TestAccStreamDSStreamInstance_basic
2025-05-11T00:29:58.8264407Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-2042257286316436509
2025-05-11T00:29:58.8267114Z     data_source_stream_instance_test.go:14: 
2025-05-11T00:29:58.8269227Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8272677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8276433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instance_test.go:14
2025-05-11T00:29:58.8278025Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8279734Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8280826Z         	Test:       	TestAccStreamDSStreamInstance_basic
2025-05-11T00:29:58.8282916Z         	Messages:   	Project creation failed: test-acc-tf-p-2042257286316436509, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8284203Z --- FAIL: TestAccStreamDSStreamInstance_basic (0.12s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 4 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 7 seconds
- 2025-05-19 PASS 7 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-05-23 PASS 7 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 7 seconds
- 2025-05-27
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-30
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-06-03
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05 PASS 3 seconds
- 2025-06-06 PASS 4 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-12 PASS 4 seconds
- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-19 PASS 4 seconds
- 2025-06-20 PASS 4 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.8273024Z === RUN   TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8273608Z     data_source_stream_instance_test.go:14: Creating execution project: test-acc-tf-p-5691322219671736419
2025-06-22T00:49:55.8278064Z === CONT  TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8333642Z === NAME  TestAccStreamDSStreamInstance_basic
2025-06-22T00:49:55.8334272Z     data_source_stream_instance_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.8334767Z         
2025-06-22T00:49:55.8335030Z         Error: error creating resource
2025-06-22T00:49:55.8335347Z         
2025-06-22T00:49:55.8335687Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8336402Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8337053Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8337348Z         
2025-06-22T00:49:55.8337920Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaaf7a0954e84ae4db/streams
2025-06-22T00:49:55.8338691Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8339292Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8339730Z         BadRequestDetail: 
2025-06-22T00:49:55.8340041Z --- FAIL: TestAccStreamDSStreamInstance_basic (33.27s)
```

- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 4 seconds
- 2025-06-25
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-26
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 5 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 4 seconds
- 2025-07-10 PASS 7 seconds