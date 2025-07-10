# stream/streamconnection/TestAccStreamDSStreamConnection_cluster Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 125) FAIL(x 7)
Success rate: 94.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-880977387854817834/connections/ConnectionNameCluster | dev | flaky_500 | 667.04s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-6171029363681927437/connections/ConnectionNameCluster | qa | flaky_500 | 811.01s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-3524572173492197424/connections/ConnectionNameCluster | dev | flaky_500 | 529.00s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-3907119028049976419/connections/ConnectionNameCluster | dev | flaky_500 | 596.08s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-05 01:03](#error-2025-06-05t0103580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-4371413748409721969 | dev | flaky_500 | 180.06s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams | qa | flaky_500 | 625.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 9 minutes
- 2025-04-13 PASS 13 minutes
- 2025-04-14 PASS 7 minutes
- 2025-04-15 PASS 9 minutes
- 2025-04-16
  - FAIL 11 minutes

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2897638Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-04-16T00:45:12.2898815Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-6506428792292632908
2025-04-16T00:45:12.2899789Z 2025/04/16 00:27:17 [DEBUG] Waiting for state to become: [IDLE]
2025-04-16T00:45:12.2900453Z 2025/04/16 00:30:17 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2901085Z 2025/04/16 00:31:18 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2901702Z 2025/04/16 00:31:28 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2902308Z 2025/04/16 00:32:28 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2902909Z 2025/04/16 00:32:38 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2903281Z 2025/04/16 00:33:38 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2903646Z 2025/04/16 00:33:48 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2904220Z 2025/04/16 00:34:48 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2904580Z 2025/04/16 00:34:58 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2905138Z 2025/04/16 00:35:59 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2905476Z 2025/04/16 00:36:09 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2905815Z 2025/04/16 00:37:09 [TRACE] Waiting 10s before next try
2025-04-16T00:45:12.2906145Z 2025/04/16 00:37:19 [TRACE] Waiting 1m0s before next try
2025-04-16T00:45:12.2955347Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-04-16T00:45:12.3061775Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-04-16T00:45:12.3062464Z     data_source_stream_connection_test.go:55: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3062965Z         
2025-04-16T00:45:12.3063400Z         Error: error deleting resource
2025-04-16T00:45:12.3063671Z         
2025-04-16T00:45:12.3064807Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-880977387854817834/connections/ConnectionNameCluster
2025-04-16T00:45:12.3065718Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3066312Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3066722Z         BadRequestDetail: 
2025-04-16T00:45:12.3067041Z --- FAIL: TestAccStreamDSStreamConnection_cluster (667.43s)
```

  - FAIL 13 minutes

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7923807Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-04-16T12:49:32.7924957Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4649966378659418057
2025-04-16T12:49:32.7925894Z 2025/04/16 12:30:19 [DEBUG] Waiting for state to become: [IDLE]
2025-04-16T12:49:32.7926543Z 2025/04/16 12:33:19 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7927147Z 2025/04/16 12:34:20 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7927523Z 2025/04/16 12:34:30 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7927887Z 2025/04/16 12:35:30 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7928271Z 2025/04/16 12:35:40 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7928620Z 2025/04/16 12:36:41 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7928970Z 2025/04/16 12:36:51 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7930429Z 2025/04/16 12:37:51 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7931076Z 2025/04/16 12:38:01 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7931691Z 2025/04/16 12:39:01 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7932290Z 2025/04/16 12:39:12 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7932878Z 2025/04/16 12:40:12 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7933468Z 2025/04/16 12:40:22 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7934063Z 2025/04/16 12:41:22 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7934653Z 2025/04/16 12:41:33 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.7935245Z 2025/04/16 12:42:33 [TRACE] Waiting 10s before next try
2025-04-16T12:49:32.7935831Z 2025/04/16 12:42:43 [TRACE] Waiting 1m0s before next try
2025-04-16T12:49:32.8000666Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-04-16T12:49:32.8176543Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-04-16T12:49:32.8177242Z     data_source_stream_connection_test.go:55: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8177756Z         
2025-04-16T12:49:32.8178033Z         Error: error deleting resource
2025-04-16T12:49:32.8178297Z         
2025-04-16T12:49:32.8179392Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-6171029363681927437/connections/ConnectionNameCluster
2025-04-16T12:49:32.8180303Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8180906Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8181382Z         BadRequestDetail: 
2025-04-16T12:49:32.8181788Z --- FAIL: TestAccStreamDSStreamConnection_cluster (811.07s)
```

  - FAIL 8 minutes

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9915601Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-04-16T14:37:26.9917076Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-21219100653573012
2025-04-16T14:37:26.9918264Z 2025/04/16 14:22:16 [DEBUG] Waiting for state to become: [IDLE]
2025-04-16T14:37:26.9919204Z 2025/04/16 14:25:16 [TRACE] Waiting 1m0s before next try
2025-04-16T14:37:26.9920145Z 2025/04/16 14:26:16 [TRACE] Waiting 10s before next try
2025-04-16T14:37:26.9921035Z 2025/04/16 14:26:27 [TRACE] Waiting 1m0s before next try
2025-04-16T14:37:26.9921874Z 2025/04/16 14:27:27 [TRACE] Waiting 10s before next try
2025-04-16T14:37:26.9922741Z 2025/04/16 14:27:37 [TRACE] Waiting 1m0s before next try
2025-04-16T14:37:26.9923365Z 2025/04/16 14:28:37 [TRACE] Waiting 10s before next try
2025-04-16T14:37:26.9924405Z 2025/04/16 14:28:47 [TRACE] Waiting 1m0s before next try
2025-04-16T14:37:26.9925043Z 2025/04/16 14:29:48 [TRACE] Waiting 10s before next try
2025-04-16T14:37:26.9925420Z 2025/04/16 14:29:58 [TRACE] Waiting 1m0s before next try
2025-04-16T14:37:26.9978090Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-04-16T14:37:27.0105841Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-04-16T14:37:27.0106542Z     data_source_stream_connection_test.go:55: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0107087Z         
2025-04-16T14:37:27.0107359Z         Error: error deleting resource
2025-04-16T14:37:27.0107628Z         
2025-04-16T14:37:27.0108513Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-3524572173492197424/connections/ConnectionNameCluster
2025-04-16T14:37:27.0109569Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0110167Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0110577Z         BadRequestDetail: 
2025-04-16T14:37:27.0110902Z --- FAIL: TestAccStreamDSStreamConnection_cluster (529.02s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8823131Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-04-17T00:44:44.8824229Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4026895985449610887
2025-04-17T00:44:44.8825241Z 2025/04/17 00:26:51 [DEBUG] Waiting for state to become: [IDLE]
2025-04-17T00:44:44.8825994Z 2025/04/17 00:29:51 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8826629Z 2025/04/17 00:30:51 [TRACE] Waiting 10s before next try
2025-04-17T00:44:44.8827275Z 2025/04/17 00:31:01 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8827877Z 2025/04/17 00:32:02 [TRACE] Waiting 10s before next try
2025-04-17T00:44:44.8828695Z 2025/04/17 00:32:12 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8829301Z 2025/04/17 00:33:12 [TRACE] Waiting 10s before next try
2025-04-17T00:44:44.8829912Z 2025/04/17 00:33:22 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8830515Z 2025/04/17 00:34:22 [TRACE] Waiting 10s before next try
2025-04-17T00:44:44.8831111Z 2025/04/17 00:34:32 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8831707Z 2025/04/17 00:35:32 [TRACE] Waiting 10s before next try
2025-04-17T00:44:44.8832308Z 2025/04/17 00:35:42 [TRACE] Waiting 1m0s before next try
2025-04-17T00:44:44.8923677Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-04-17T00:44:44.9062134Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-04-17T00:44:44.9062967Z     data_source_stream_connection_test.go:55: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.9063481Z         
2025-04-17T00:44:44.9063759Z         Error: error deleting resource
2025-04-17T00:44:44.9064024Z         
2025-04-17T00:44:44.9064919Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-3907119028049976419/connections/ConnectionNameCluster
2025-04-17T00:44:44.9065834Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.9066447Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.9066859Z         BadRequestDetail: 
2025-04-17T00:44:44.9067186Z --- FAIL: TestAccStreamDSStreamConnection_cluster (596.75s)
```

- 2025-04-18 PASS 11 minutes
- 2025-04-19 PASS 8 minutes
- 2025-04-20 PASS 13 minutes
- 2025-04-21 PASS 10 minutes
- 2025-04-22 PASS 8 minutes
- 2025-04-23 PASS 9 minutes
- 2025-04-24 PASS 8 minutes
- 2025-04-25 PASS 9 minutes
- 2025-04-26 PASS 9 minutes
- 2025-04-27 PASS 11 minutes
- 2025-04-28 PASS 9 minutes
- 2025-04-29 PASS 9 minutes
- 2025-04-30
  - PASS 8 minutes
  - PASS 12 minutes
- 2025-05-01
  - PASS 7 minutes
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 7 minutes
  - PASS 9 minutes
  - PASS 8 minutes
- 2025-05-02 PASS 9 minutes
- 2025-05-03 PASS 11 minutes
- 2025-05-04 PASS 9 minutes
- 2025-05-05
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-05-06 PASS 9 minutes
- 2025-05-07
  - PASS 8 minutes
  - PASS 7 minutes
  - PASS 11 minutes
  - PASS 10 minutes
- 2025-05-08 PASS 11 minutes
- 2025-05-09 PASS 9 minutes
- 2025-05-10 PASS 9 minutes
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6023362Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-05-11T00:29:58.6024463Z     data_source_stream_connection_test.go:52: Creating execution project: test-acc-tf-p-8397946611207020963
2025-05-11T00:29:58.6025433Z     data_source_stream_connection_test.go:52: 
2025-05-11T00:29:58.6027085Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6030250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6039332Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:58.6043519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connection_test.go:52
2025-05-11T00:29:58.6045090Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6046739Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6047800Z         	Test:       	TestAccStreamDSStreamConnection_cluster
2025-05-11T00:29:58.6049964Z         	Messages:   	Project creation failed: test-acc-tf-p-8397946611207020963, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6051304Z --- FAIL: TestAccStreamDSStreamConnection_cluster (0.02s)
```

- 2025-05-12 PASS 9 minutes
- 2025-05-13
  - PASS 11 minutes
  - PASS 8 minutes
- 2025-05-14 PASS 11 minutes
- 2025-05-15 PASS 8 minutes
- 2025-05-16 PASS 9 minutes
- 2025-05-17 PASS 9 minutes
- 2025-05-18 PASS 11 minutes
- 2025-05-19 PASS 8 minutes
- 2025-05-20
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-05-21 PASS 10 minutes
- 2025-05-22
  - PASS 10 minutes
  - PASS 9 minutes
  - PASS 7 minutes
- 2025-05-23 PASS 14 minutes
- 2025-05-24 PASS 8 minutes
- 2025-05-25 PASS 9 minutes
- 2025-05-26 PASS 10 minutes
- 2025-05-27
  - PASS 10 minutes
  - PASS 7 minutes
- 2025-05-28
  - PASS 18 minutes
  - PASS 10 minutes
- 2025-05-29
  - PASS 9 minutes
  - PASS 8 minutes
- 2025-05-30
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-05-31 PASS 8 minutes
- 2025-06-01
  - PASS 10 minutes
  - PASS 8 minutes
  - PASS 7 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-06-02
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 7 minutes
- 2025-06-03
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 9 minutes
- 2025-06-04 PASS 8 minutes
- 2025-06-05

### Error 2025-06-05T01:03:58+00:00
```
2025-06-05T01:03:58.6997372Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-05T01:03:58.6998536Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4371413748409721969
2025-06-05T01:03:58.6999995Z 2025/06/05 00:28:55 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T01:03:58.7000864Z     data_source_stream_connection_test.go:52: 
2025-06-05T01:03:58.7002556Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T01:03:58.7006380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T01:03:58.7010557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connection_test.go:52
2025-06-05T01:03:58.7012292Z         	Error:      	Received unexpected error:
2025-06-05T01:03:58.7017317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-4371413748409721969 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7019759Z         	Test:       	TestAccStreamDSStreamConnection_cluster
2025-06-05T01:03:58.7024017Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4371413748409721969, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4c5161ca93c1f0526c1/clusters/test-acc-tf-c-4371413748409721969 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T01:03:58.7026754Z --- FAIL: TestAccStreamDSStreamConnection_cluster (180.65s)
```

- 2025-06-06 PASS 8 minutes
- 2025-06-07 PASS 9 minutes
- 2025-06-08 PASS 10 minutes
- 2025-06-09 PASS 8 minutes
- 2025-06-10 PASS 12 minutes
- 2025-06-11
  - PASS 8 minutes
  - PASS 11 minutes
- 2025-06-12 PASS 8 minutes
- 2025-06-13 PASS 10 minutes
- 2025-06-14 PASS 8 minutes
- 2025-06-15 PASS 10 minutes
- 2025-06-16 PASS 9 minutes
- 2025-06-17 PASS 9 minutes
- 2025-06-18
  - PASS 10 minutes
  - PASS 8 minutes
- 2025-06-19 PASS 9 minutes
- 2025-06-20 PASS 9 minutes
- 2025-06-21 PASS 8 minutes
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7938849Z === RUN   TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7939946Z     data_source_stream_connection_test.go:52: Creating execution cluster: test-acc-tf-c-4325048252218596100
2025-06-22T00:49:55.7940584Z 2025/06/22 00:31:56 [DEBUG] Waiting for state to become: [IDLE]
2025-06-22T00:49:55.7940971Z 2025/06/22 00:34:56 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7941331Z 2025/06/22 00:35:57 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7941692Z 2025/06/22 00:36:07 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7942317Z 2025/06/22 00:37:07 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7942807Z 2025/06/22 00:37:18 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7943194Z 2025/06/22 00:38:18 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7943556Z 2025/06/22 00:38:28 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7943908Z 2025/06/22 00:39:28 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7944263Z 2025/06/22 00:39:39 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7944609Z 2025/06/22 00:40:39 [TRACE] Waiting 10s before next try
2025-06-22T00:49:55.7944956Z 2025/06/22 00:40:49 [TRACE] Waiting 1m0s before next try
2025-06-22T00:49:55.7959253Z === CONT  TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7989429Z === NAME  TestAccStreamDSStreamConnection_cluster
2025-06-22T00:49:55.7989995Z     data_source_stream_connection_test.go:55: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:49:55.7990410Z         
2025-06-22T00:49:55.7990675Z         Error: error creating resource
2025-06-22T00:49:55.7990929Z         
2025-06-22T00:49:55.7991246Z           with mongodbatlas_stream_instance.test,
2025-06-22T00:49:55.7991869Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_stream_instance" "test":
2025-06-22T00:49:55.7992721Z           13: 		resource "mongodbatlas_stream_instance" "test" {
2025-06-22T00:49:55.7993023Z         
2025-06-22T00:49:55.7993516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams
2025-06-22T00:49:55.7994186Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:49:55.7994749Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.7995126Z         BadRequestDetail: 
2025-06-22T00:49:55.8009161Z    test_name=TestAccStreamRSStreamConnection_cluster test_terraform_path=/home/runner/work/_temp/7f74e564-488a-4791-a813-f2813e49176c/terraform test_working_directory=/tmp/plugintest811532831
2025-06-22T00:49:55.8045348Z --- FAIL: TestAccStreamDSStreamConnection_cluster (625.82s)
```

- 2025-06-23 PASS 8 minutes
- 2025-06-24 PASS 9 minutes
- 2025-06-25
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-06-26
  - PASS 8 minutes
  - PASS 7 minutes
- 2025-06-27 PASS 8 minutes
- 2025-06-28 PASS 7 minutes
- 2025-06-29 PASS 8 minutes
- 2025-06-30 PASS 10 minutes
- 2025-07-01
  - PASS 7 minutes
  - PASS 9 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 10 minutes
  - PASS 8 minutes
  - PASS 8 minutes
- 2025-07-02 PASS 11 minutes
- 2025-07-03 PASS 9 minutes
- 2025-07-04 PASS 11 minutes
- 2025-07-05 PASS 8 minutes
- 2025-07-06 PASS 10 minutes
- 2025-07-07 PASS 9 minutes
- 2025-07-08 PASS 8 minutes
- 2025-07-09 PASS 8 minutes
- 2025-07-10 PASS 7 minutes