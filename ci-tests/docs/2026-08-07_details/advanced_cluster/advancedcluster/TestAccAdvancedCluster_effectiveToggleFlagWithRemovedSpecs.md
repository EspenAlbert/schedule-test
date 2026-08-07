# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057480000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.04s
[2026-07-10 00:49](#error-2026-07-10t0049460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a5041a7e2b992f4d13aeefe/clusters/test-acc-tf-c-876207279022137182 | dev | flaky_500 | 6135.08s
[2026-07-11 00:44](#error-2026-07-11t0044210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.10s
[2026-07-21 00:52](#error-2026-07-21t0052570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-24 00:42](#error-2026-07-24t0042290000) |  | dev |  | 6657.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:48+00:00
```
2026-07-09T00:57:48.5846540Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-09T00:57:50.0073031Z     shared_resource.go:160: 
2026-07-09T00:57:50.0074861Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:50.0077155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:50.0079303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:50.0081835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:50.0083893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:50.0086067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:57:50.0088138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-07-09T00:57:50.0088990Z         	Error:      	Received unexpected error:
2026-07-09T00:57:50.0091868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:50.0093415Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-09T00:57:50.0096000Z         	Messages:   	Project creation failed: test-acc-tf-p-7189112802802130174, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:50.0097664Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (1.43s)
```

- 2026-07-10

### Error 2026-07-10T00:49:46+00:00
```
2026-07-10T00:49:46.8062432Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-10T01:03:50.2424818Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-10T02:46:05.3931020Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-10T02:46:05.3931820Z     effective_fields_test.go:289: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:46:05.3932358Z         
2026-07-10T02:46:05.3932635Z         Error: Error in delete
2026-07-10T02:46:05.3932905Z         
2026-07-10T02:46:05.3933349Z         cluster name: test-acc-tf-c-876207279022137182, API error details:
2026-07-10T02:46:05.3934275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a7e2b992f4d13aeefe/clusters/test-acc-tf-c-876207279022137182
2026-07-10T02:46:05.3935128Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:46:05.3935777Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:46:05.3936228Z         BadRequestDetail: 
2026-07-10T02:46:05.3936655Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (6135.77s)
```

- 2026-07-11

### Error 2026-07-11T00:44:21+00:00
```
2026-07-11T00:44:21.0103474Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-11T00:45:39.9754933Z     shared_resource.go:160: 
2026-07-11T00:45:39.9761601Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:39.9767837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:45:39.9770985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:45:39.9773854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:45:39.9775904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:45:39.9777849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-11T00:45:39.9779875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-07-11T00:45:39.9780712Z         	Error:      	Received unexpected error:
2026-07-11T00:45:39.9782734Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:39.9784166Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-11T00:45:39.9786098Z         	Messages:   	Project creation failed: test-acc-tf-p-8878219556084119914, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:39.9787342Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (78.97s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 2 hours
- 2026-07-17 PASS an hour
- 2026-07-18 PASS an hour
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:57+00:00
```
2026-07-21T00:52:57.2295327Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-21T00:52:57.9332340Z     shared_resource.go:160: 
2026-07-21T00:52:57.9333694Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:57.9335928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:57.9337729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:57.9339498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:57.9341461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:57.9343382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:52:57.9345329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-07-21T00:52:57.9346138Z         	Error:      	Received unexpected error:
2026-07-21T00:52:57.9348922Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:57.9350655Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-21T00:52:57.9353013Z         	Messages:   	Project creation failed: test-acc-tf-p-4493401763036992120, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:57.9354547Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (0.71s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:29+00:00
```
2026-07-23T00:49:29.0518661Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-23T00:49:29.6450477Z     shared_resource.go:160: 
2026-07-23T00:49:29.6452605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:29.6454476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:29.6456326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:29.6458151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:29.6459949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:29.6462014Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:29.6464078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:283
2026-07-23T00:49:29.6464918Z         	Error:      	Received unexpected error:
2026-07-23T00:49:29.6467762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:29.6469273Z         	Test:       	TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-23T00:49:29.6471690Z         	Messages:   	Project creation failed: test-acc-tf-p-4175583918881155717, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:29.6473665Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (0.60s)
```

- 2026-07-24

### Error 2026-07-24T00:42:29+00:00
```
2026-07-24T00:42:29.1009410Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-24T00:47:32.6517342Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-24T02:01:05.7560105Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-07-24T02:01:05.7560929Z     effective_fields_test.go:289: Step 4/6 error: Error running apply: exit status 1
2026-07-24T02:01:05.7561404Z         
2026-07-24T02:01:05.7561704Z         Error: Error in update
2026-07-24T02:01:05.7562149Z         
2026-07-24T02:01:05.7562552Z           with mongodbatlas_advanced_cluster.test,
2026-07-24T02:01:05.7563254Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-24T02:01:05.7563906Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-07-24T02:01:05.7564253Z         
2026-07-24T02:01:05.7564917Z         cluster=test-acc-tf-c-476386370902185299 didn't reach desired state: IDLE,
2026-07-24T02:01:05.7565380Z         error:
2026-07-24T02:01:05.7566131Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a62b4f2164de4ef0698009c/clusters/test-acc-tf-c-476386370902185299
2026-07-24T02:01:05.7566961Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-07-24T02:01:05.7567421Z         BadRequestDetail: 
2026-07-24T02:38:29.0590131Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (6657.68s)
```

- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 2 hours
- 2026-07-29 PASS an hour
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 56 minutes
  - PASS 53 minutes
- 2026-08-01 PASS 54 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 46 minutes
- 2026-08-04 PASS 58 minutes
- 2026-08-05 PASS 44 minutes
- 2026-08-06 PASS 46 minutes
- 2026-08-07 PASS 51 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 56 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 57 minutes
  - PASS 54 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 59 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 48 minutes
  - PASS 56 minutes
- 2026-07-30 PASS 44 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 53 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
