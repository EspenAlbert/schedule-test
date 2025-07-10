# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-2875620061507522308 | dev | flaky_500 | 3.07s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-8627547948177469034 | qa | flaky_500 | 4.01s
[2025-04-16 14:37](#error-2025-04-16t1437270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-5517935050026634413 | dev | flaky_500 | 4.02s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-6118955311626993732 | dev | flaky_500 | 3.06s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-5637826643844833644 | qa | flaky_500 | 32.03s

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
2025-04-16T00:45:12.3268199Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T00:45:12.3269641Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T00:45:12.3354016Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T00:45:12.3354709Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3355210Z         
2025-04-16T00:45:12.3355500Z         Error: error during resource delete
2025-04-16T00:45:12.3355772Z         
2025-04-16T00:45:12.3356449Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef9628a1bc7379cddabb6/streams/test-acc-tf-2875620061507522308
2025-04-16T00:45:12.3357218Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3357817Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3358224Z         BadRequestDetail: 
2025-04-16T00:45:12.3358574Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (3.74s)
```

  - FAIL 4 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.8324222Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T12:49:32.8326378Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T12:49:32.8397929Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T12:49:32.8398631Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8399353Z         
2025-04-16T12:49:32.8399779Z         Error: error during resource delete
2025-04-16T12:49:32.8400260Z         
2025-04-16T12:49:32.8401102Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d9c46bf3681fc52244/streams/test-acc-tf-8627547948177469034
2025-04-16T12:49:32.8401973Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8402788Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8403327Z         BadRequestDetail: 
2025-04-16T12:49:32.8403857Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (4.13s)
```

  - FAIL 4 seconds

### Error 2025-04-16T14:37:27+00:00
```
2025-04-16T14:37:27.0316264Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T14:37:27.0318382Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T14:37:27.0375457Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-16T14:37:27.0376169Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0376696Z         
2025-04-16T14:37:27.0376995Z         Error: error during resource delete
2025-04-16T14:37:27.0377272Z         
2025-04-16T14:37:27.0377964Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1651a0bf7e379212ce/streams/test-acc-tf-5517935050026634413
2025-04-16T14:37:27.0378745Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0379360Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0379781Z         BadRequestDetail: 
2025-04-16T14:37:27.0380512Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (4.17s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.9303887Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-04-17T00:44:44.9305308Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-17T00:44:44.9362704Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-04-17T00:44:44.9363408Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9363903Z         
2025-04-17T00:44:44.9364200Z         Error: error during resource delete
2025-04-17T00:44:44.9364475Z         
2025-04-17T00:44:44.9365167Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9a693d5155b4ed1c8/streams/test-acc-tf-6118955311626993732
2025-04-17T00:44:44.9365948Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9366677Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9367101Z         BadRequestDetail: 
2025-04-17T00:44:44.9367450Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (3.55s)
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
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
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
2025-05-11T00:29:58.8418865Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-05-11T00:29:58.8419808Z     resource_stream_instance_test.go:44: Creating execution project: test-acc-tf-p-424739009749523701
2025-05-11T00:29:58.8420591Z     resource_stream_instance_test.go:44: 
2025-05-11T00:29:58.8422257Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.8425366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.8429038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:44
2025-05-11T00:29:58.8430526Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.8432253Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8433260Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2025-05-11T00:29:58.8435191Z         	Messages:   	Project creation failed: test-acc-tf-p-424739009749523701, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.8436411Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (0.02s)
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
- 2025-06-13 PASS 4 seconds
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
2025-07-06T00:48:43.0020868Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0022249Z === CONT  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0051981Z === NAME  TestAccStreamRSStreamInstance_withStreamConfig
2025-07-06T00:48:43.0052671Z     resource_stream_instance_test.go:47: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:48:43.0053158Z         
2025-07-06T00:48:43.0053435Z         Error: error during resource delete
2025-07-06T00:48:43.0053701Z         
2025-07-06T00:48:43.0054359Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40a690ae45e168bd44d/streams/test-acc-tf-5637826643844833644
2025-07-06T00:48:43.0055238Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-06T00:48:43.0055818Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0056222Z         BadRequestDetail: 
2025-07-06T00:48:43.0056591Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (32.35s)
```

- 2025-07-07 PASS 2 seconds
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS 2 seconds
- 2025-07-10 PASS 3 seconds