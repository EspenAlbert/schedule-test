# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-11 00:51](#error-2026-07-11t0051350000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s
[2026-07-21 00:53](#error-2026-07-21t0053020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-23 00:49](#error-2026-07-23t0049330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:54+00:00
```
2026-07-09T00:57:54.4451725Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-09T00:57:55.0116961Z     shared_resource.go:160: 
2026-07-09T00:57:55.0118621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:55.0121203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:57:55.0123651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:57:55.0126487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:57:55.0128416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:57:55.0130320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:129
2026-07-09T00:57:55.0131129Z         	Error:      	Received unexpected error:
2026-07-09T00:57:55.0134012Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:55.0135813Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-09T00:57:55.0138302Z         	Messages:   	Project creation failed: test-acc-tf-p-2737956525541193268, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:55.0139950Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (0.57s)
```

- 2026-07-10 PASS 49 minutes
- 2026-07-11

### Error 2026-07-11T00:51:35+00:00
```
2026-07-11T00:51:35.5942614Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-11T00:52:52.0625745Z     shared_resource.go:160: 
2026-07-11T00:52:52.0627498Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:52:52.0630741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-11T00:52:52.0634138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-11T00:52:52.0635960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-11T00:52:52.0638199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-11T00:52:52.0640031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:129
2026-07-11T00:52:52.0640842Z         	Error:      	Received unexpected error:
2026-07-11T00:52:52.0642793Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:52:52.0644342Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-11T00:52:52.0646163Z         	Messages:   	Project creation failed: test-acc-tf-p-7426953957603515764, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:52:52.0647584Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (76.47s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 46 minutes
- 2026-07-14 PASS 35 minutes
- 2026-07-15 PASS 35 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 36 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:02+00:00
```
2026-07-21T00:53:02.1947834Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-21T00:53:03.4307093Z     shared_resource.go:160: 
2026-07-21T00:53:03.4308689Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:03.4311052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:03.4312866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:03.4314615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:03.4316792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:03.4318636Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:129
2026-07-21T00:53:03.4319879Z         	Error:      	Received unexpected error:
2026-07-21T00:53:03.4322803Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:03.4324321Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-21T00:53:03.4326668Z         	Messages:   	Project creation failed: test-acc-tf-p-716121419446802051, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:03.4328237Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (1.24s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:33+00:00
```
2026-07-23T00:49:33.2120395Z === RUN   TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-23T00:49:33.9170596Z     shared_resource.go:160: 
2026-07-23T00:49:33.9173010Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:33.9175338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:33.9177545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:33.9179535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:33.9181523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:33.9183767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:129
2026-07-23T00:49:33.9184576Z         	Error:      	Received unexpected error:
2026-07-23T00:49:33.9187370Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:33.9188902Z         	Test:       	TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale
2026-07-23T00:49:33.9191435Z         	Messages:   	Project creation failed: test-acc-tf-p-1605861286316197296, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:33.9193251Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetOplogAfterDiskScale (0.71s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 32 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 36 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 27 minutes
  - PASS 24 minutes
- 2026-08-01 PASS 23 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 minutes
- 2026-08-04 PASS 23 minutes
- 2026-08-05 PASS 24 minutes
- 2026-08-06 PASS 25 minutes
- 2026-08-07 PASS 24 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 34 minutes
  - PASS 22 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 40 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 34 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 29 minutes
- 2026-07-30 PASS 23 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
