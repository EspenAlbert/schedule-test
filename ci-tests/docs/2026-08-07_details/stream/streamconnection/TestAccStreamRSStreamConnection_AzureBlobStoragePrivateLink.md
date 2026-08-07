# stream/streamconnection/TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-10 02:38](#error-2026-07-10t0238580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a4af0479f8ffb2fe8a/clusters/test-acc-tf-c-6436243723905389693 | dev | flaky_500 | 3218.01s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-07-27 04:52](#error-2026-07-27t0452300000) |  | dev | timeout | 4597.07s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 172.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6132186Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-09T01:15:21.6132774Z     resource_stream_connection_test.go:1340: Creating execution project (1): test-acc-tf-p-4292252031042501218
2026-07-09T01:15:21.6133253Z     resource_stream_connection_test.go:1340: 
2026-07-09T01:15:21.6133989Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6135334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6136812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6138365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:1340
2026-07-09T01:15:21.6139069Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6141185Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6142331Z         	Test:       	TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-09T01:15:21.6144293Z         	Messages:   	Project creation failed: test-acc-tf-p-4292252031042501218, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:15:21.6145629Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (0.86s)
```

- 2026-07-10

### Error 2026-07-10T02:38:58+00:00
```
2026-07-10T02:38:58.2328063Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-10T02:38:58.2329177Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-10T02:38:58.2340136Z    test_working_directory=/tmp/plugintest122994318 test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink test_terraform_path=/home/runner/work/_temp/60e42999-87a2-4691-bf2d-03b12947068d/terraform
2026-07-10T02:38:58.2341837Z     resource_stream_connection_test.go:1354: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:38:58.2342746Z         
2026-07-10T02:38:58.2343157Z         Error: Error in delete
2026-07-10T02:38:58.2343458Z         
2026-07-10T02:38:58.2343917Z         cluster name: test-acc-tf-c-6436243723905389693, API error details:
2026-07-10T02:38:58.2344786Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a4af0479f8ffb2fe8a/clusters/test-acc-tf-c-6436243723905389693
2026-07-10T02:38:58.2345583Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:38:58.2346216Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:38:58.2346666Z         BadRequestDetail: 
2026-07-10T02:38:58.2347126Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (3218.05s)
```

- 2026-07-11 PASS 29 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 34 minutes
- 2026-07-14 PASS 42 minutes
- 2026-07-15 PASS 38 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 34 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3400650Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-21T00:59:13.3401423Z     resource_stream_connection_test.go:1340: Creating execution project (1): test-acc-tf-p-5879656175750812225
2026-07-21T00:59:13.3402167Z     resource_stream_connection_test.go:1340: 
2026-07-21T00:59:13.3403330Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3405193Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3407188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3409336Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:1340
2026-07-21T00:59:13.3410247Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3413313Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3414881Z         	Test:       	TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-21T00:59:13.3417711Z         	Messages:   	Project creation failed: test-acc-tf-p-5879656175750812225, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:59:13.3419405Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (0.78s)
```

- 2026-07-22 PASS 29 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 2 hours
- 2026-07-25 PASS 26 minutes
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T04:52:30+00:00
```
2026-07-27T04:52:30.3513416Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-27T04:52:30.3515474Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-07-27T04:52:30.3532660Z    test_working_directory=/tmp/plugintest2286611690 test_name=TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink test_step_number=1 test_terraform_path=/home/runner/work/_temp/7ed39aff-cd81-43ba-a8b0-12dcb4cfe919/terraform
2026-07-27T04:52:30.3534921Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-07-27T04:52:30.3535751Z         
2026-07-27T04:52:30.3536619Z         Error: error when waiting for status transition in creation
2026-07-27T04:52:30.3537297Z         
2026-07-27T04:52:30.3538008Z           with mongodbatlas_stream_privatelink_endpoint.test,
2026-07-27T04:52:30.3539442Z           on terraform_plugin_test.tf line 103, in resource "mongodbatlas_stream_privatelink_endpoint" "test":
2026-07-27T04:52:30.3540782Z          103: 		resource "mongodbatlas_stream_privatelink_endpoint" "test" {
2026-07-27T04:52:30.3541497Z         
2026-07-27T04:52:30.3542370Z         timeout while waiting for state to become 'DONE, FAILED' (last state: 'IDLE',
2026-07-27T04:52:30.3543354Z         timeout: 1h0m0s)
2026-07-27T04:52:30.3544142Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (4597.73s)
```

- 2026-07-28 PASS an hour
- 2026-07-29 PASS 33 minutes
- 2026-07-30 PASS 31 minutes
- 2026-07-31 PASS 28 minutes
- 2026-08-01 PASS 26 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 2 minutes

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0106988Z === RUN   TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-08-03T01:33:30.0108062Z === CONT  TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink
2026-08-03T01:33:30.0135755Z   
2026-08-03T01:33:30.0136260Z     resource_stream_connection_test.go:1354: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:30.0136745Z         
2026-08-03T01:33:30.0137855Z         Error: error creating cloud provider access Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/cloudProviderAccess": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0138678Z         
2026-08-03T01:33:30.0139133Z           with mongodbatlas_cloud_provider_access_setup.azure_setup,
2026-08-03T01:33:30.0140010Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_cloud_provider_access_setup" "azure_setup":
2026-08-03T01:33:30.0140847Z           31: 		resource "mongodbatlas_cloud_provider_access_setup" "azure_setup" {
2026-08-03T01:33:30.0141271Z         
2026-08-03T01:33:30.0141770Z         Error: Error in create
2026-08-03T01:33:30.0142046Z         
2026-08-03T01:33:30.0142554Z           with mongodbatlas_advanced_cluster.test,
2026-08-03T01:33:30.0143279Z           on terraform_plugin_test.tf line 77, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-03T01:33:30.0143953Z           77: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-03T01:33:30.0144525Z         
2026-08-03T01:33:30.0145011Z         cluster name: test-acc-tf-c-9072858609244260811, API error details: Post
2026-08-03T01:33:30.0145772Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/clusters":
2026-08-03T01:33:30.0146359Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0146678Z         
2026-08-03T01:33:30.0146983Z         Error: error creating resource
2026-08-03T01:33:30.0147280Z         
2026-08-03T01:33:30.0147646Z           with mongodbatlas_stream_workspace.test,
2026-08-03T01:33:30.0148363Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_stream_workspace" "test":
2026-08-03T01:33:30.0149036Z           94: 		resource "mongodbatlas_stream_workspace" "test" {
2026-08-03T01:33:30.0149398Z         
2026-08-03T01:33:30.0149630Z         Post
2026-08-03T01:33:30.0150203Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams":
2026-08-03T01:33:30.0150777Z         dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0151257Z --- FAIL: TestAccStreamRSStreamConnection_AzureBlobStoragePrivateLink (172.76s)
```

  - PASS 26 minutes
  - PASS 51 minutes
- 2026-08-04 PASS 25 minutes
- 2026-08-05 PASS 29 minutes
- 2026-08-06 PASS 25 minutes
- 2026-08-07 PASS 38 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 26 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 26 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 minutes
  - PASS 27 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 25 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
