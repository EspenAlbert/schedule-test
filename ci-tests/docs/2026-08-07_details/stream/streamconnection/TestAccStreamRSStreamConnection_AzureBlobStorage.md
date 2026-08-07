# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStorage Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 165.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6116589Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-07-09T01:15:21.6117152Z     resource_stream_connection_test.go:1302: Creating execution project (1): test-acc-tf-p-4523715815351368206
2026-07-09T01:15:21.6117636Z     resource_stream_connection_test.go:1302: 
2026-07-09T01:15:21.6118375Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6119728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6121079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6122426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6124121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:1302
2026-07-09T01:15:21.6125107Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6125613Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6127718Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6128801Z         	Test:       	TestAccStreamRSStreamConnection_AzureBlobStorage
2026-07-09T01:15:21.6130595Z         	Messages:   	Project creation failed: test-acc-tf-p-4523715815351368206, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6131776Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (0.74s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11 PASS 3 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 4 minutes
- 2026-07-14 PASS 3 minutes
- 2026-07-15 PASS 3 minutes
- 2026-07-16 PASS 4 minutes
- 2026-07-17 PASS 3 minutes
- 2026-07-18 PASS 3 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3377413Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-07-21T00:59:13.3378306Z     resource_stream_connection_test.go:1302: Creating execution project (1): test-acc-tf-p-9073764465695055431
2026-07-21T00:59:13.3379221Z     resource_stream_connection_test.go:1302: 
2026-07-21T00:59:13.3380396Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3382651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3384691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3386856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3389296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:1302
2026-07-21T00:59:13.3390630Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3391328Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3394346Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3396006Z         	Test:       	TestAccStreamRSStreamConnection_AzureBlobStorage
2026-07-21T00:59:13.3398469Z         	Messages:   	Project creation failed: test-acc-tf-p-9073764465695055431, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3400113Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (0.61s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23 PASS 3 minutes
- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 4 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 2 minutes

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0089204Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStorage
2026-08-03T01:33:30.0100388Z   
2026-08-03T01:33:30.0100891Z     resource_stream_connection_test.go:1314: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0101370Z         
2026-08-03T01:33:30.0102484Z         Error: error creating cloud provider access Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/cloudProviderAccess": dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:30.0103302Z         
2026-08-03T01:33:30.0103755Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-08-03T01:33:30.0104825Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-08-03T01:33:30.0105664Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-08-03T01:33:30.0106094Z         
2026-08-03T01:33:30.0106444Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStorage (165.57s)
```

  - PASS 3 minutes
  - PASS 3 minutes
- 2026-08-04 PASS 4 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
