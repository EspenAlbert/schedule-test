# advanced_cluster/advancedcluster/TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.09s
[2026-07-21 00:53](#error-2026-07-21t0053190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:18+00:00
```
2026-07-09T00:58:18.9212169Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-09T00:58:19.8556234Z     shared_resource.go:160: 
2026-07-09T00:58:19.8558184Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:19.8561206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:58:19.8563805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:58:19.8565828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:58:19.8567651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:58:19.8569571Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3102
2026-07-09T00:58:19.8570403Z         	Error:      	Received unexpected error:
2026-07-09T00:58:19.8573288Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:19.8575073Z         	Test:       	TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-09T00:58:19.8577554Z         	Messages:   	Project creation failed: test-acc-tf-p-4758254856886092731, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:58:19.8579707Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError (0.94s)
```

- 2026-07-10 PASS 30 seconds
- 2026-07-11 PASS 6 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 30 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS a minute
- 2026-07-16 PASS 11 seconds
- 2026-07-17 PASS 35 seconds
- 2026-07-18 PASS 31 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:19+00:00
```
2026-07-21T00:53:19.4497528Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-21T00:53:20.1756760Z     shared_resource.go:160: 
2026-07-21T00:53:20.1757920Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:20.1759724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:53:20.1761728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:53:20.1763491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:53:20.1765203Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:53:20.1767479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3102
2026-07-21T00:53:20.1768276Z         	Error:      	Received unexpected error:
2026-07-21T00:53:20.1771171Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:20.1772648Z         	Test:       	TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-21T00:53:20.1775026Z         	Messages:   	Project creation failed: test-acc-tf-p-875147672725956061, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:20.1776607Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError (0.73s)
```

- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:49:46+00:00
```
2026-07-23T00:49:46.4864918Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-23T00:49:46.8428582Z     shared_resource.go:160: 
2026-07-23T00:49:46.8430819Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:46.8433905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:46.8436490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:46.8438613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:46.8440721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:46.8443273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:3102
2026-07-23T00:49:46.8444238Z         	Error:      	Received unexpected error:
2026-07-23T00:49:46.8447294Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:46.8448834Z         	Test:       	TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError
2026-07-23T00:49:46.8451408Z         	Messages:   	Project creation failed: test-acc-tf-p-4993167058328183249, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:46.8453199Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy_nonAWSError (0.36s)
```

- 2026-07-24 PASS 55 seconds
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS 45 seconds
- 2026-07-31
  - PASS 55 seconds
  - PASS 30 seconds
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS 40 seconds
- 2026-08-04 PASS 30 seconds
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS 45 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS a minute
  - PASS 40 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 40 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 35 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30 PASS 30 seconds
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 35 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
