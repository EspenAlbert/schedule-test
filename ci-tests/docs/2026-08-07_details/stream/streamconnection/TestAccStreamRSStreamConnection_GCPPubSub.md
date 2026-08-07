# stream/streamconnection/TestAccStreamRSStreamConnection_GCPPubSub Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.01s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6035756Z === RUN   TestAccStreamRSStreamConnection_GCPPubSub
2026-07-09T01:15:21.6036315Z     resource_stream_connection_test.go:509: Creating execution project (1): test-acc-tf-p-1178215098819240121
2026-07-09T01:15:21.6036787Z     resource_stream_connection_test.go:509: 
2026-07-09T01:15:21.6037552Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6038933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6040392Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6041772Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6043463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:509
2026-07-09T01:15:21.6044484Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6044935Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6047213Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6048311Z         	Test:       	TestAccStreamRSStreamConnection_GCPPubSub
2026-07-09T01:15:21.6050130Z         	Messages:   	Project creation failed: test-acc-tf-p-1178215098819240121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6051336Z --- FAIL: TestAccStreamRSStreamConnection_GCPPubSub (1.43s)
```

- 2026-07-10 PASS a minute
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS a minute
- 2026-07-17 PASS a minute
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3261358Z === RUN   TestAccStreamRSStreamConnection_GCPPubSub
2026-07-21T00:59:13.3262070Z     resource_stream_connection_test.go:509: Creating execution project (1): test-acc-tf-p-1416134905414611974
2026-07-21T00:59:13.3262805Z     resource_stream_connection_test.go:509: 
2026-07-21T00:59:13.3263903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3265765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3267640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3269500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3271647Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:509
2026-07-21T00:59:13.3273238Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3273796Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3276707Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3278178Z         	Test:       	TestAccStreamRSStreamConnection_GCPPubSub
2026-07-21T00:59:13.3280607Z         	Messages:   	Project creation failed: test-acc-tf-p-1416134905414611974, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3282247Z --- FAIL: TestAccStreamRSStreamConnection_GCPPubSub (1.11s)
```

- 2026-07-22 PASS a minute
- 2026-07-23 PASS a minute
- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0007005Z === RUN   TestAccStreamRSStreamConnection_GCPPubSub
2026-08-03T01:33:30.0017425Z    test_working_directory=/tmp/plugintest530344549 test_step_number=1 test_name=TestAccStreamRSStreamConnection_GCPPubSub
2026-08-03T01:33:30.0018312Z     resource_stream_connection_test.go:512: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0018788Z         
2026-08-03T01:33:30.0019904Z         Error: error creating cloud provider access Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/cloudProviderAccess": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0020730Z         
2026-08-03T01:33:30.0021308Z           with mongodbatlas_cloud_provider_access_setup.gcp_setup,
2026-08-03T01:33:30.0022150Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup":
2026-08-03T01:33:30.0022954Z           12: 		resource "mongodbatlas_cloud_provider_access_setup" "gcp_setup" {
2026-08-03T01:33:30.0023366Z         
2026-08-03T01:33:30.0023682Z --- FAIL: TestAccStreamRSStreamConnection_GCPPubSub (5.30s)
```

  - PASS a minute
  - PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a minute
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
