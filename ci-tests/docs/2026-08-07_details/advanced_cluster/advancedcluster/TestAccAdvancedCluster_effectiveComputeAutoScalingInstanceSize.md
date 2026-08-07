# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:53](#error-2026-07-09t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.09s
[2026-07-21 00:49](#error-2026-07-21t0049460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-23 00:49](#error-2026-07-23t0049240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:53:51+00:00
```
2026-07-09T00:53:51.0017001Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-09T00:55:21.8979827Z     shared_resource.go:160: 
2026-07-09T00:55:21.8982885Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:55:21.8986061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:55:21.8988236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:55:21.8990372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:55:21.8992521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:55:21.8994704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-09T00:55:21.8996770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:102
2026-07-09T00:55:21.8997616Z         	Error:      	Received unexpected error:
2026-07-09T00:55:21.8999593Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:21.9000826Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-09T00:55:21.9002714Z         	Messages:   	Project creation failed: test-acc-tf-p-1556931978864765175, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:21.9004035Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (90.90s)
```

- 2026-07-10 PASS 39 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 23 minutes
- 2026-07-14 PASS 27 minutes
- 2026-07-15 PASS 22 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 33 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:46+00:00
```
2026-07-21T00:49:46.4742314Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-21T00:50:49.5780497Z     shared_resource.go:160: 
2026-07-21T00:50:49.5781785Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:49.5783597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:50:49.5785389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:50:49.5787173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:50:49.5788896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:50:49.5790989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-21T00:50:49.5792990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:102
2026-07-21T00:50:49.5793798Z         	Error:      	Received unexpected error:
2026-07-21T00:50:49.5795751Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:49.5796931Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-21T00:50:49.5798736Z         	Messages:   	Project creation failed: test-acc-tf-p-6028435712809758440, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:49.5800569Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (63.11s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:24+00:00
```
2026-07-23T00:49:24.2887432Z === RUN   TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-23T00:49:24.5939447Z     shared_resource.go:160: 
2026-07-23T00:49:24.5942019Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:24.5945964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:49:24.5947870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:49:24.5949751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:49:24.5951584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:49:24.5953753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-07-23T00:49:24.5955805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:102
2026-07-23T00:49:24.5956655Z         	Error:      	Received unexpected error:
2026-07-23T00:49:24.5959497Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:24.5961032Z         	Test:       	TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize
2026-07-23T00:49:24.5964632Z         	Messages:   	Project creation failed: test-acc-tf-p-5780732761243168679, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:24.5968085Z --- FAIL: TestAccAdvancedCluster_effectiveComputeAutoScalingInstanceSize (0.31s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 26 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 18 minutes
  - PASS 20 minutes
- 2026-08-01 PASS 19 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 18 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 19 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 23 minutes
  - PASS 15 minutes
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
- 2026-07-26 PASS 27 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 18 minutes
  - PASS 23 minutes
- 2026-07-30 PASS 17 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
