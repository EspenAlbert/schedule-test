# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveReadOnlyAutoScaling Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.04s
[2026-07-21 00:52](#error-2026-07-21t0052550000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.05s
[2026-07-23 00:49](#error-2026-07-23t0049270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:45+00:00
```
2026-07-09T00:57:45.9305396Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-09T00:57:47.3653428Z     shared_resource.go:160: 
2026-07-09T00:57:47.3656369Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:47.3659152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:47.3661325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:47.3663470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:47.3665490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:47.3667475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:57:47.3669855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:239
2026-07-09T00:57:47.3670698Z         	Error:      	Received unexpected error:
2026-07-09T00:57:47.3673722Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:47.3675409Z         	Test:       	TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-09T00:57:47.3677859Z         	Messages:   	Project creation failed: test-acc-tf-p-7304417763487157426, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:47.3679492Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (1.44s)
```

- 2026-07-10 PASS 46 minutes
- 2026-07-11 PASS 20 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 26 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 40 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:55+00:00
```
2026-07-21T00:52:55.8887793Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-21T00:52:56.3420630Z     shared_resource.go:160: 
2026-07-21T00:52:56.3421895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:56.3423708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:56.3425463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:56.3427179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:56.3428884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:56.3431028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:52:56.3433035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:239
2026-07-21T00:52:56.3434278Z         	Error:      	Received unexpected error:
2026-07-21T00:52:56.3437113Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:56.3438694Z         	Test:       	TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-21T00:52:56.3441218Z         	Messages:   	Project creation failed: test-acc-tf-p-7303588043656223859, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:56.3442725Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (0.46s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:27+00:00
```
2026-07-23T00:49:27.8765701Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-23T00:49:28.4439532Z     shared_resource.go:160: 
2026-07-23T00:49:28.4440987Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:28.4443328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:28.4445216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:28.4447262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:28.4449131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:28.4451119Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:28.4453286Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:239
2026-07-23T00:49:28.4454123Z         	Error:      	Received unexpected error:
2026-07-23T00:49:28.4456968Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:28.4458440Z         	Test:       	TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-23T00:49:28.4460826Z         	Messages:   	Project creation failed: test-acc-tf-p-8184759150106611349, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:28.4462542Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (0.57s)
```

- 2026-07-24 PASS 56 minutes
- 2026-07-25 PASS 27 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 26 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 20 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 23 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-15 09:32](#error-2026-07-15t0932480000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a5753bd8f62f9b41291a1de/clusters | qa | out_of_capacity | 6.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 32 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 23 minutes
  - FAIL 6 seconds

### Error 2026-07-15T09:32:48+00:00
```
2026-07-15T09:32:48.5201199Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-15T09:34:20.5127660Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-15T09:34:25.7188807Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-07-15T09:34:25.7189994Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-07-15T09:34:25.7190855Z         
2026-07-15T09:34:25.7191399Z         Error: Error in create
2026-07-15T09:34:25.7191941Z         
2026-07-15T09:34:25.7192679Z           with mongodbatlas_advanced_cluster.test,
2026-07-15T09:34:25.7194370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-15T09:34:25.7195680Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-15T09:34:25.7196365Z         
2026-07-15T09:34:25.7197241Z         cluster name: test-acc-tf-c-2047421632473105687, API error details:
2026-07-15T09:34:25.7198604Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753bd8f62f9b41291a1de/clusters
2026-07-15T09:34:25.7200463Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-07-15T09:34:25.7201820Z         region is currently out of capacity for the requested instance size. Reason:
2026-07-15T09:34:25.7202841Z         Conflict. Params: [], BadRequestDetail: 
2026-07-15T09:34:25.8019215Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (6.20s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 30 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 22 minutes
  - PASS 25 minutes
- 2026-07-30 PASS 23 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
