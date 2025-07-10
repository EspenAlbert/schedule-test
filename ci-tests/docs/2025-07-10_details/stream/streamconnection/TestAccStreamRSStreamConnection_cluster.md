# stream/streamconnection/TestAccStreamRSStreamConnection_cluster Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 125) FAIL(x 7)
Success rate: 94.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-2073122007305895633/connections/ConnectionNameCluster | dev | flaky_500 | 5.08s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-469156735645350541/connections/ConnectionNameCluster | qa | flaky_500 | 5.09s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-7697289402035156380/connections/ConnectionNameCluster | dev | flaky_500 | 5.09s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-5720407850366984011/connections/ConnectionNameCluster | dev | flaky_500 | 5.06s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-05 01:03](#error-2025-06-05t0103580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-1175157726895816297 | dev | flaky_500 | 180.09s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams | qa | flaky_500 | 31.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 6 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 6 seconds
- 2025-04-16
  - FAIL 5 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2947452Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-04-16T00:45:12.2952652Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-04-16T00:45:12.3204305Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-04-16T00:45:12.3205016Z     resource_stream_connection_test.go:139: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3205543Z         
2025-04-16T00:45:12.3205825Z         Error: error deleting resource
2025-04-16T00:45:12.3206095Z         
2025-04-16T00:45:12.3206984Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-2073122007305895633/connections/ConnectionNameCluster
2025-04-16T00:45:12.3207905Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3208518Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3208935Z         BadRequestDetail: 
2025-04-16T00:45:12.3209260Z --- FAIL: TestAccStreamRSStreamConnection_cluster (5.76s)
```

  - FAIL 5 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7992310Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-04-16T12:49:32.7998569Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-04-16T12:49:32.8117587Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-04-16T12:49:32.8118288Z     resource_stream_connection_test.go:139: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8118806Z         
2025-04-16T12:49:32.8119246Z         Error: error deleting resource
2025-04-16T12:49:32.8119523Z         
2025-04-16T12:49:32.8120398Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-469156735645350541/connections/ConnectionNameCluster
2025-04-16T12:49:32.8121301Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8121903Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8122317Z         BadRequestDetail: 
2025-04-16T12:49:32.8122644Z --- FAIL: TestAccStreamRSStreamConnection_cluster (5.87s)
```

  - FAIL 5 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9969985Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-04-16T14:37:26.9976618Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-04-16T14:37:27.0213071Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-04-16T14:37:27.0214171Z     resource_stream_connection_test.go:139: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0214914Z         
2025-04-16T14:37:27.0215257Z         Error: error deleting resource
2025-04-16T14:37:27.0215526Z         
2025-04-16T14:37:27.0216612Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-7697289402035156380/connections/ConnectionNameCluster
2025-04-16T14:37:27.0217675Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0218387Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0218814Z         BadRequestDetail: 
2025-04-16T14:37:27.0219235Z --- FAIL: TestAccStreamRSStreamConnection_cluster (5.92s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8908559Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-04-17T00:44:44.8921088Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-04-17T00:44:44.9178375Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-04-17T00:44:44.9179091Z     resource_stream_connection_test.go:139: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9179604Z         
2025-04-17T00:44:44.9179886Z         Error: error deleting resource
2025-04-17T00:44:44.9180150Z         
2025-04-17T00:44:44.9181051Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-5720407850366984011/connections/ConnectionNameCluster
2025-04-17T00:44:44.9181969Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9182585Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9183005Z         BadRequestDetail: 
2025-04-17T00:44:44.9183318Z --- FAIL: TestAccStreamRSStreamConnection_cluster (5.61s)
```

- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 6 seconds
- 2025-04-28 PASS 5 seconds
- 2025-04-29 PASS 6 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6261512Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-05-11T00:29:58.6262863Z     resource_stream_connection_test.go:138: Creating execution project: test-acc-tf-p-7097801049714781239
2025-05-11T00:29:58.6263868Z     resource_stream_connection_test.go:138: 
2025-05-11T00:29:58.6265798Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6269114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6272673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:58.6276564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:145
2025-05-11T00:29:58.6280870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:138
2025-05-11T00:29:58.6282947Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6284787Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6285878Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2025-05-11T00:29:58.6287934Z         	Messages:   	Project creation failed: test-acc-tf-p-7097801049714781239, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6289257Z --- FAIL: TestAccStreamRSStreamConnection_cluster (0.02s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-06-03
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05

### Error 2025-06-05T01:03:58+00:00
```
2025-06-05T01:03:58.7075660Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-05T01:03:58.7076280Z     resource_stream_connection_test.go:138: Creating execution cluster: test-acc-tf-c-1175157726895816297
2025-06-05T01:03:58.7076967Z     resource_stream_connection_test.go:138: 
2025-06-05T01:03:58.7077885Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:03:58.7079838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:03:58.7081838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:145
2025-06-05T01:03:58.7084090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:138
2025-06-05T01:03:58.7084934Z         	Error:      	Received unexpected error:
2025-06-05T01:03:58.7087300Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-1175157726895816297 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7088541Z         	Test:       	TestAccStreamRSStreamConnection_cluster
2025-06-05T01:03:58.7090585Z         	Messages:   	Cluster creation failed: test-acc-tf-c-1175157726895816297, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-1175157726895816297 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7091948Z --- FAIL: TestAccStreamRSStreamConnection_cluster (180.89s)
```

- 2025-06-06 PASS 6 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 6 seconds
- 2025-06-20 PASS 6 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7952338Z === RUN   TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.7959928Z === CONT  TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8009976Z === NAME  TestAccStreamRSStreamConnection_cluster
2025-06-22T00:49:55.8010530Z     resource_stream_connection_test.go:139: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:49:55.8010934Z         
2025-06-22T00:49:55.8011202Z         Error: error creating resource
2025-06-22T00:49:55.8011464Z         
2025-06-22T00:49:55.8011771Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.8012638Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.8013262Z           12: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.8013566Z         
2025-06-22T00:49:55.8014064Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.8014741Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.8015312Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8015689Z         BadRequestDetail: 
2025-06-22T00:49:55.8022184Z    test_step_number=1 test_name=TestAccStreamRSStreamConnection_kafkaPlaintext
2025-06-22T00:49:55.8045762Z --- FAIL: TestAccStreamRSStreamConnection_cluster (31.86s)
```

- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 6 seconds
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 10 seconds
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10 PASS 8 seconds