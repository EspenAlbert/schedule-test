# advanced_cluster/advancedcluster/TestAccAdvancedCluster_gen1ProvisionedDiskIops Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 24) FAIL(x 11)
Success rate: 68.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058230000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-11 00:56](#error-2026-07-11t0056430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-21 00:53](#error-2026-07-21t0053230000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.03s
[2026-07-23 00:49](#error-2026-07-23t0049490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:23+00:00
```
2026-07-09T00:58:23.8343567Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-09T00:58:24.4603929Z     shared_resource.go:160: 
2026-07-09T00:58:24.4606505Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:24.4610762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:24.4615527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:24.4619362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:24.4622882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:24.4627379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3356
2026-07-09T00:58:24.4628963Z         	Error:      	Received unexpected error:
2026-07-09T00:58:24.4634795Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:24.4637783Z         	Test:       	TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-09T00:58:24.4642315Z         	Messages:   	Project creation failed: test-acc-tf-p-2151288089206436401, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:24.4645356Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (0.63s)
```

- 2026-07-10 PASS 35 minutes
- 2026-07-11

### Error 2026-07-11T00:56:43+00:00
```
2026-07-11T00:56:43.9792431Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-11T00:56:44.3283042Z     shared_resource.go:160: 
2026-07-11T00:56:44.3284943Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:56:44.3288075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:56:44.3291536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:56:44.3295193Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:56:44.3298553Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:56:44.3302123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3356
2026-07-11T00:56:44.3303778Z         	Error:      	Received unexpected error:
2026-07-11T00:56:44.3308849Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:44.3311356Z         	Test:       	TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-11T00:56:44.3315802Z         	Messages:   	Project creation failed: test-acc-tf-p-3974981852986946140, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:56:44.3318602Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (0.35s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 18 minutes
- 2026-07-15 PASS 26 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 16 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:23+00:00
```
2026-07-21T00:53:23.0899551Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-21T00:53:23.4268887Z     shared_resource.go:160: 
2026-07-21T00:53:23.4270750Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:23.4273806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:23.4277326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:23.4280644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:23.4284026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:23.4287441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3356
2026-07-21T00:53:23.4289084Z         	Error:      	Received unexpected error:
2026-07-21T00:53:23.4294790Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:23.4297941Z         	Test:       	TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-21T00:53:23.4302826Z         	Messages:   	Project creation failed: test-acc-tf-p-4455133211593977458, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:23.4305500Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (0.34s)
```

- 2026-07-22 PASS 38 minutes
- 2026-07-23

### Error 2026-07-23T00:49:49+00:00
```
2026-07-23T00:49:49.3897551Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-23T00:49:49.7117157Z     shared_resource.go:160: 
2026-07-23T00:49:49.7119524Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:49.7123230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:49.7125753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:49.7129156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:49.7132792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:49.7136665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3356
2026-07-23T00:49:49.7138121Z         	Error:      	Received unexpected error:
2026-07-23T00:49:49.7196755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:49.7199558Z         	Test:       	TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-23T00:49:49.7204345Z         	Messages:   	Project creation failed: test-acc-tf-p-854613958914387120, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:49.7207282Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (0.32s)
```

- 2026-07-24 PASS 29 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 20 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 15 minutes
  - PASS 13 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 14 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 14 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 00:50](#error-2026-07-12t0050520000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a52e47054924de0baf51465/clusters/test-acc-tf-c-5132827914665815558 | qa | 1071.08s
[2026-07-15 07:26](#error-2026-07-15t0726090000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a57359493daee1cb0a00fa9/clusters/test-acc-tf-c-6676157960194536890 | qa | 1186.04s
[2026-07-15 09:34](#error-2026-07-15t0934190000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a5753d28f62f9b41291d1a0/clusters/test-acc-tf-c-7447162446856025845 | qa | 823.09s
[2026-07-19 00:48](#error-2026-07-19t0048080000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a5c1e60775af650dc088e0f/clusters/test-acc-tf-c-3135746052083538590 | qa | 1180.01s
[2026-07-26 00:51](#error-2026-07-26t0051360000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a655990c80b9566cad18225/clusters/test-acc-tf-c-2231798380260951201 | qa | 1044.04s
[2026-07-29 13:19](#error-2026-07-29t1319140000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a69fd7fd51fea57f48e31f8/clusters/test-acc-tf-c-7025353107330652628 | qa | 931.04s
[2026-07-29 15:07](#error-2026-07-29t1507480000) | HOURLY_BILLING_LIMIT_EXCEEDED /api/atlas/v2/groups/6a6a16c31b62c83bc2d3de1c/clusters/test-acc-tf-c-6046642614491594462 | qa | 960.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T00:50:52+00:00
```
2026-07-12T00:50:52.8779374Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-12T00:50:52.9839867Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-12T00:51:37.7778240Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-12T00:51:37.7779921Z     pre_check.go:46: Time before creating cluster: 2026-07-12T00:51:37.777526866Z, ProjectID: 6a52e47054924de0baf51465, Cluster name: test-acc-tf-c-5132827914665815558
2026-07-12T01:02:10.8156711Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-12T01:02:10.8157613Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-12T01:02:10.8158185Z         
2026-07-12T01:02:10.8158568Z         Error: Error in update
2026-07-12T01:02:10.8158851Z         
2026-07-12T01:02:10.8159299Z           with mongodbatlas_advanced_cluster.test,
2026-07-12T01:02:10.8160089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-12T01:02:10.8160816Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-12T01:02:10.8161226Z         
2026-07-12T01:02:10.8161668Z         cluster name: test-acc-tf-c-5132827914665815558, API error details:
2026-07-12T01:02:10.8162556Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e47054924de0baf51465/clusters/test-acc-tf-c-5132827914665815558
2026-07-12T01:02:10.8163366Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-12T01:02:10.8163997Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-12T01:02:10.8164464Z         Params: [], BadRequestDetail: 
2026-07-12T01:08:44.5443977Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (1071.77s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 19 minutes

### Error 2026-07-15T07:26:09+00:00
```
2026-07-15T07:26:09.9010133Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T07:26:10.0016360Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T07:26:54.9073815Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T07:26:54.9076539Z     pre_check.go:46: Time before creating cluster: 2026-07-15T07:26:54.907090672Z, ProjectID: 6a57359493daee1cb0a00fa9, Cluster name: test-acc-tf-c-6676157960194536890
2026-07-15T07:37:52.6527449Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T07:37:52.6528276Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-15T07:37:52.6528814Z         
2026-07-15T07:37:52.6529090Z         Error: Error in update
2026-07-15T07:37:52.6529549Z         
2026-07-15T07:37:52.6529968Z           with mongodbatlas_advanced_cluster.test,
2026-07-15T07:37:52.6530689Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-15T07:37:52.6531350Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-15T07:37:52.6531695Z         
2026-07-15T07:37:52.6532143Z         cluster name: test-acc-tf-c-6676157960194536890, API error details:
2026-07-15T07:37:52.6533049Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a57359493daee1cb0a00fa9/clusters/test-acc-tf-c-6676157960194536890
2026-07-15T07:37:52.6533887Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-15T07:37:52.6534777Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-15T07:37:52.6535271Z         Params: [], BadRequestDetail: 
2026-07-15T07:45:56.2886200Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (1186.38s)
```

  - FAIL 13 minutes

### Error 2026-07-15T09:34:19+00:00
```
2026-07-15T09:34:19.6265400Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T09:34:19.8301064Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T09:34:34.6038135Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T09:34:34.6041629Z     pre_check.go:46: Time before creating cluster: 2026-07-15T09:34:34.603396493Z, ProjectID: 6a5753d28f62f9b41291d1a0, Cluster name: test-acc-tf-c-7447162446856025845
2026-07-15T09:44:30.9837041Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-15T09:44:30.9838049Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-15T09:44:30.9838611Z         
2026-07-15T09:44:30.9839020Z         Error: Error in update
2026-07-15T09:44:30.9839290Z         
2026-07-15T09:44:30.9840008Z           with mongodbatlas_advanced_cluster.test,
2026-07-15T09:44:30.9840850Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-15T09:44:30.9841716Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-15T09:44:30.9842190Z         
2026-07-15T09:44:30.9842796Z         cluster name: test-acc-tf-c-7447162446856025845, API error details:
2026-07-15T09:44:30.9844206Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753d28f62f9b41291d1a0/clusters/test-acc-tf-c-7447162446856025845
2026-07-15T09:44:30.9845087Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-15T09:44:30.9845771Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-15T09:44:30.9846477Z         Params: [], BadRequestDetail: 
2026-07-15T09:45:35.8706061Z    test_step_number=3 test_name=TestAccAdvancedCluster_gen2HighPerformanceDiskIops test_terraform_path=/home/runner/work/_temp/a85d4bbf-e6a8-45a0-a34c-46fa99dd2df0/terraform test_working_directory=/tmp/plugintest3510041994
2026-07-15T09:48:03.4616043Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (823.92s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19

### Error 2026-07-19T00:48:08+00:00
```
2026-07-19T00:48:08.4947006Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-19T00:48:08.4986521Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-19T00:48:18.5037265Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-19T00:48:18.5038342Z     pre_check.go:46: Time before creating cluster: 2026-07-19T00:48:18.503422499Z, ProjectID: 6a5c1e60775af650dc088e0f, Cluster name: test-acc-tf-c-3135746052083538590
2026-07-19T01:00:15.1787088Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-19T01:00:15.1787998Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-19T01:00:15.1788828Z         
2026-07-19T01:00:15.1789114Z         Error: Error in update
2026-07-19T01:00:15.1789388Z         
2026-07-19T01:00:15.1789896Z           with mongodbatlas_advanced_cluster.test,
2026-07-19T01:00:15.1790670Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-19T01:00:15.1791347Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-19T01:00:15.1791690Z         
2026-07-19T01:00:15.1792144Z         cluster name: test-acc-tf-c-3135746052083538590, API error details:
2026-07-19T01:00:15.1793059Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5c1e60775af650dc088e0f/clusters/test-acc-tf-c-3135746052083538590
2026-07-19T01:00:15.1793891Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-19T01:00:15.1794557Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-19T01:00:15.1795066Z         Params: [], BadRequestDetail: 
2026-07-19T01:07:48.5809937Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (1180.08s)
```

- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26

### Error 2026-07-26T00:51:36+00:00
```
2026-07-26T00:51:36.9287071Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-26T00:51:36.9301655Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-26T00:51:46.9506999Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-26T00:51:46.9508729Z     pre_check.go:46: Time before creating cluster: 2026-07-26T00:51:46.950423155Z, ProjectID: 6a655990c80b9566cad18225, Cluster name: test-acc-tf-c-2231798380260951201
2026-07-26T01:03:57.7882528Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-26T01:03:57.7883869Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-26T01:03:57.7884829Z         
2026-07-26T01:03:57.7885311Z         Error: Error in update
2026-07-26T01:03:57.7885773Z         
2026-07-26T01:03:57.7886383Z           with mongodbatlas_advanced_cluster.test,
2026-07-26T01:03:57.7887668Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-26T01:03:57.7888852Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-26T01:03:57.7889444Z         
2026-07-26T01:03:57.7890515Z         cluster name: test-acc-tf-c-2231798380260951201, API error details:
2026-07-26T01:03:57.7892196Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a655990c80b9566cad18225/clusters/test-acc-tf-c-2231798380260951201
2026-07-26T01:03:57.7894434Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-26T01:03:57.7895648Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-26T01:03:57.7896510Z         Params: [], BadRequestDetail: 
2026-07-26T01:09:01.3076001Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (1044.38s)
```

- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - FAIL 15 minutes

### Error 2026-07-29T13:19:14+00:00
```
2026-07-29T13:19:14.7051338Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T13:19:15.2710985Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T13:20:24.7133240Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T13:20:24.7134368Z     pre_check.go:46: Time before creating cluster: 2026-07-29T13:20:24.712599266Z, ProjectID: 6a69fd7fd51fea57f48e31f8, Cluster name: test-acc-tf-c-7025353107330652628
2026-07-29T13:30:44.3996927Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T13:30:44.3997679Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-29T13:30:44.3998151Z         
2026-07-29T13:30:44.3998496Z         Error: Error in update
2026-07-29T13:30:44.3999002Z         
2026-07-29T13:30:44.3999336Z           with mongodbatlas_advanced_cluster.test,
2026-07-29T13:30:44.4000102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-29T13:30:44.4000863Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-29T13:30:44.4001370Z         
2026-07-29T13:30:44.4001794Z         cluster name: test-acc-tf-c-7025353107330652628, API error details:
2026-07-29T13:30:44.4002574Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a69fd7fd51fea57f48e31f8/clusters/test-acc-tf-c-7025353107330652628
2026-07-29T13:30:44.4003278Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-29T13:30:44.4003846Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-29T13:30:44.4004282Z         Params: [], BadRequestDetail: 
2026-07-29T13:34:46.1535987Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (931.45s)
```

  - FAIL 16 minutes

### Error 2026-07-29T15:07:48+00:00
```
2026-07-29T15:07:48.6344679Z === RUN   TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T15:07:48.9962460Z === CONT  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T15:08:43.6684040Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T15:08:43.6685950Z     pre_check.go:46: Time before creating cluster: 2026-07-29T15:08:43.668064381Z, ProjectID: 6a6a16c31b62c83bc2d3de1c, Cluster name: test-acc-tf-c-6046642614491594462
2026-07-29T15:18:46.7647389Z === NAME  TestAccAdvancedCluster_gen1ProvisionedDiskIops
2026-07-29T15:18:46.7648894Z     resource_test.go:3359: Step 3/6, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-29T15:18:46.7649586Z         
2026-07-29T15:18:46.7649880Z         Error: Error in update
2026-07-29T15:18:46.7650268Z         
2026-07-29T15:18:46.7650642Z           with mongodbatlas_advanced_cluster.test,
2026-07-29T15:18:46.7651513Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-29T15:18:46.7652186Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-29T15:18:46.7652541Z         
2026-07-29T15:18:46.7653201Z         cluster name: test-acc-tf-c-6046642614491594462, API error details:
2026-07-29T15:18:46.7654158Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a6a16c31b62c83bc2d3de1c/clusters/test-acc-tf-c-6046642614491594462
2026-07-29T15:18:46.7654986Z         PATCH: HTTP 403 Forbidden (Error code: "HOURLY_BILLING_LIMIT_EXCEEDED")
2026-07-29T15:18:46.7655642Z         Detail: The hourly billing limit has been exceeded. Reason: Forbidden.
2026-07-29T15:18:46.7656133Z         Params: [], BadRequestDetail: 
2026-07-29T15:23:49.2133775Z --- FAIL: TestAccAdvancedCluster_gen1ProvisionedDiskIops (960.57s)
```

- 2026-07-30 PASS 14 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
