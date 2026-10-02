# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-08 04:29](#error-2026-09-08t0429240000) |  | dev | timeout | 2584.07s
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections | dev |  | 0.04s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections | dev |  | 0.04s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 0.05s
[2026-09-30 03:54](#error-2026-09-30t0354310000) |  | dev | timeout | 2570.06s
[2026-10-02 04:31](#error-2026-10-02t0431490000) |  | dev | timeout | 2576.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 14 minutes
- 2026-09-03 PASS 14 minutes
- 2026-09-04 PASS 13 minutes
- 2026-09-05 PASS 14 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 14 minutes
- 2026-09-08

### Error 2026-09-08T04:29:24+00:00
```
2026-09-08T04:29:24.6846277Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-08T04:29:24.6856374Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/ed2dce9e-4d43-4c57-a532-2bde85aca16f/terraform
2026-09-08T04:29:24.6857501Z     resource_stream_connection_test.go:343: Step 2/2 error: Error running apply: exit status 1
2026-09-08T04:29:24.6858003Z         
2026-09-08T04:29:24.6858435Z         Error: error waiting for stream connection to be ready
2026-09-08T04:29:24.6858807Z         
2026-09-08T04:29:24.6859213Z           with mongodbatlas_stream_connection.test,
2026-09-08T04:29:24.6859961Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-08T04:29:24.6860657Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-08T04:29:24.6861028Z         
2026-09-08T04:29:24.6861522Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-08T04:29:24.6862708Z         'PENDING', timeout: 40m0s)
2026-09-08T04:29:24.6863323Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (2584.74s)
```

- 2026-09-09 PASS 14 minutes
- 2026-09-10 PASS 13 minutes
- 2026-09-11
  - PASS 14 minutes
  - PASS 13 minutes
- 2026-09-12 PASS 13 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 15 minutes
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7280909Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-15T01:40:26.7302950Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/8dac1edb-3c11-4d9a-ab9c-98e5162cfa5f/terraform
2026-09-15T01:40:26.7304083Z     resource_stream_connection_test.go:343: Step 1/2 error: Error running apply: exit status 1
2026-09-15T01:40:26.7304576Z         
2026-09-15T01:40:26.7304897Z         Error: error creating resource
2026-09-15T01:40:26.7305207Z         
2026-09-15T01:40:26.7305590Z           with mongodbatlas_stream_connection.test,
2026-09-15T01:40:26.7306343Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-15T01:40:26.7307044Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-15T01:40:26.7307413Z         
2026-09-15T01:40:26.7308242Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b8f45e19b0d3dc5815/streams/test-acc-tf-s-6926080479850766113/connections
2026-09-15T01:40:26.7309482Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7310367Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7311090Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7311776Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (0.39s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6775222Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-16T01:37:53.6789293Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/8ee13637-549f-4c33-91e7-d08eae244697/terraform
2026-09-16T01:37:53.6790450Z     resource_stream_connection_test.go:343: Step 1/2 error: Error running apply: exit status 1
2026-09-16T01:37:53.6790961Z         
2026-09-16T01:37:53.6791299Z         Error: error creating resource
2026-09-16T01:37:53.6791747Z         
2026-09-16T01:37:53.6792155Z           with mongodbatlas_stream_connection.test,
2026-09-16T01:37:53.6792917Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-16T01:37:53.6793618Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-16T01:37:53.6794000Z         
2026-09-16T01:37:53.6794848Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7013d831ec44ad97b/streams/test-acc-tf-s-9171587775280842368/connections
2026-09-16T01:37:53.6795985Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6796699Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6797445Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6798130Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (0.41s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.264000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2648424Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-17T01:38:50.2661260Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/fb1bcd30-9ea9-40ce-ba2e-82d12a3edae5/terraform
2026-09-17T01:38:50.2662310Z     resource_stream_connection_test.go:343: Step 1/2 error: Error running apply: exit status 1
2026-09-17T01:38:50.2662792Z         
2026-09-17T01:38:50.2663125Z         Error: error creating resource
2026-09-17T01:38:50.2663446Z         
2026-09-17T01:38:50.2663845Z           with mongodbatlas_stream_connection.test,
2026-09-17T01:38:50.2664537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-09-17T01:38:50.2665203Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-17T01:38:50.2665587Z         
2026-09-17T01:38:50.2666358Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b8911/streams/test-acc-tf-s-7698987809372845664/connections
2026-09-17T01:38:50.2667260Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2667919Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2668615Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2669266Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (0.51s)
```

- 2026-09-18 PASS 16 minutes
- 2026-09-19 PASS 13 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 15 minutes
- 2026-09-22 PASS 12 minutes
- 2026-09-23 PASS 13 minutes
- 2026-09-24 PASS 14 minutes
- 2026-09-25 PASS 16 minutes
- 2026-09-26 PASS 12 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 13 minutes
- 2026-09-29
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2026-09-30
  - FAIL 42 minutes

### Error 2026-09-30T03:54:31+00:00
```
2026-09-30T03:54:31.9921271Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-09-30T03:54:31.9940361Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace test_terraform_path=/home/runner/work/_temp/9db32149-28c8-44d0-b5c1-b846194fcb9a/terraform
2026-09-30T03:54:31.9941514Z     resource_stream_connection_test.go:343: Step 2/2 error: Error running apply: exit status 1
2026-09-30T03:54:31.9942034Z         
2026-09-30T03:54:31.9942473Z         Error: error waiting for stream connection to be ready
2026-09-30T03:54:31.9942863Z         
2026-09-30T03:54:31.9943269Z           with mongodbatlas_stream_connection.test,
2026-09-30T03:54:31.9944030Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-09-30T03:54:31.9944735Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-09-30T03:54:31.9945125Z         
2026-09-30T03:54:31.9945899Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-09-30T03:54:31.9946437Z         'PENDING', timeout: 40m0s)
2026-09-30T03:54:31.9947228Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (2570.58s)
```

  - PASS 16 minutes
  - PASS 13 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02

### Error 2026-10-02T04:31:49+00:00
```
2026-10-02T04:31:49.7490333Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace
2026-10-02T04:31:49.7503510Z   
2026-10-02T04:31:49.7504170Z     resource_stream_connection_test.go:343: Step 2/2 error: Error running apply: exit status 1
2026-10-02T04:31:49.7504758Z         
2026-10-02T04:31:49.7505253Z         Error: error waiting for stream connection to be ready
2026-10-02T04:31:49.7505692Z         
2026-10-02T04:31:49.7506157Z           with mongodbatlas_stream_connection.test,
2026-10-02T04:31:49.7507074Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-10-02T04:31:49.7507911Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-10-02T04:31:49.7508474Z         
2026-10-02T04:31:49.7509076Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-10-02T04:31:49.7509679Z         'PENDING', timeout: 40m0s)
2026-10-02T04:31:49.7510348Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingPublicToVPCRequiresReplace (2576.26s)
```


## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 14 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 12 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 12 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 14 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 13 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
