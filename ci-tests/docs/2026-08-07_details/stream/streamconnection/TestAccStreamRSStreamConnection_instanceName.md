# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6052878Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-07-09T01:15:21.6053439Z     resource_stream_connection_test.go:561: Creating execution project (1): test-acc-tf-p-3651418267228605361
2026-07-09T01:15:21.6053913Z     resource_stream_connection_test.go:561: 
2026-07-09T01:15:21.6054663Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6056165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6057549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6058912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6060459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:561
2026-07-09T01:15:21.6061491Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6062037Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6064183Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6065276Z         	Test:       	TestAccStreamRSStreamConnection_instanceName
2026-07-09T01:15:21.6067172Z         	Messages:   	Project creation failed: test-acc-tf-p-3651418267228605361, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6068389Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.67s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11 PASS 4 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14 PASS 3 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16 PASS 3 seconds
- 2026-07-17 PASS 3 seconds
- 2026-07-18 PASS 3 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3284296Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-07-21T00:59:13.3285013Z     resource_stream_connection_test.go:561: Creating execution project (1): test-acc-tf-p-6254192613085227704
2026-07-21T00:59:13.3285634Z     resource_stream_connection_test.go:561: 
2026-07-21T00:59:13.3286619Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3288614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3290474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3292494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3294629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:561
2026-07-21T00:59:13.3295942Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3296485Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3299499Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3300986Z         	Test:       	TestAccStreamRSStreamConnection_instanceName
2026-07-21T00:59:13.3303554Z         	Messages:   	Project creation failed: test-acc-tf-p-6254192613085227704, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3305179Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.65s)
```

- 2026-07-22 PASS 2 seconds
- 2026-07-23 PASS 2 seconds
- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS 2 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0026003Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-08-03T01:33:30.0036797Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform test_name=TestAccStreamRSStreamConnection_instanceName
2026-08-03T01:33:30.0037819Z     resource_stream_connection_test.go:565: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0038298Z         
2026-08-03T01:33:30.0038601Z         Error: error creating resource
2026-08-03T01:33:30.0038895Z         
2026-08-03T01:33:30.0039265Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:30.0039985Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:30.0040673Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:30.0041030Z         
2026-08-03T01:33:30.0041259Z         Post
2026-08-03T01:33:30.0042095Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:30.0042843Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0043273Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (5.29s)
```

  - PASS 2 seconds
  - PASS 2 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 2 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
