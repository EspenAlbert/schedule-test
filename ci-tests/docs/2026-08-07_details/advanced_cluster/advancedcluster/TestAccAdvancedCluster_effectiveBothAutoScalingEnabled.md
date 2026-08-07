# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBothAutoScalingEnabled Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.08s
[2026-07-21 00:52](#error-2026-07-21t0052540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-23 00:49](#error-2026-07-23t0049260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:43+00:00
```
2026-07-09T00:57:43.8582550Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-09T00:57:44.6158679Z     shared_resource.go:160: 
2026-07-09T00:57:44.6160331Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:44.6162804Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:44.6165322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:44.6167507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:44.6169642Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:44.6171979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:57:44.6174044Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:190
2026-07-09T00:57:44.6175189Z         	Error:      	Received unexpected error:
2026-07-09T00:57:44.6178073Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:44.6179603Z         	Test:       	TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-09T00:57:44.6182202Z         	Messages:   	Project creation failed: test-acc-tf-p-8570497788364483147, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:44.6184191Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (0.76s)
```

- 2026-07-10 PASS 40 minutes
- 2026-07-11 PASS 20 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 22 minutes
- 2026-07-14 PASS 26 minutes
- 2026-07-15 PASS 24 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 27 minutes
- 2026-07-18 PASS 32 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:54+00:00
```
2026-07-21T00:52:54.7404326Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-21T00:52:54.9386421Z     shared_resource.go:160: 
2026-07-21T00:52:54.9387766Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:54.9389641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:54.9391682Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:54.9393424Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:54.9395165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:54.9397897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:52:54.9399866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:190
2026-07-21T00:52:54.9400793Z         	Error:      	Received unexpected error:
2026-07-21T00:52:54.9403598Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:54.9405036Z         	Test:       	TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-21T00:52:54.9407518Z         	Messages:   	Project creation failed: test-acc-tf-p-7643518081289554935, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:54.9409044Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (0.20s)
```

- 2026-07-22 PASS 35 minutes
- 2026-07-23

### Error 2026-07-23T00:49:26+00:00
```
2026-07-23T00:49:26.8011689Z === RUN   TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-23T00:49:27.0052234Z     shared_resource.go:160: 
2026-07-23T00:49:27.0054017Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:27.0056161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:27.0058053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:27.0059903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:27.0061983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:27.0064061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:27.0066086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:190
2026-07-23T00:49:27.0066918Z         	Error:      	Received unexpected error:
2026-07-23T00:49:27.0069930Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:27.0071440Z         	Test:       	TestAccAdvancedCluster_effectiveBothAutoScalingEnabled
2026-07-23T00:49:27.0074052Z         	Messages:   	Project creation failed: test-acc-tf-p-2313113065592219867, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:27.0075688Z --- FAIL: TestAccAdvancedCluster_effectiveBothAutoScalingEnabled (0.21s)
```

- 2026-07-24 PASS 56 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 26 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 16 minutes
  - PASS 16 minutes
- 2026-08-01 PASS 17 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 16 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 29 minutes
  - PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 26 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 28 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 19 minutes
  - PASS 23 minutes
- 2026-07-30 PASS 20 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
