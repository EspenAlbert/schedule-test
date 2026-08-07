# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 111.07s
[2026-07-21 00:52](#error-2026-07-21t0052310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-07-23 00:48](#error-2026-07-23t0048230000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:43+00:00
```
2026-07-09T00:52:43.6976844Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-07-09T00:54:35.4353260Z     shared_resource.go:160: 
2026-07-09T00:54:35.4355351Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:54:35.4358291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-09T00:54:35.4361296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-09T00:54:35.4363158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-09T00:54:35.4364877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-09T00:54:35.4366698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1198
2026-07-09T00:54:35.4367492Z         	Error:      	Received unexpected error:
2026-07-09T00:54:35.4369386Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:35.4370438Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2026-07-09T00:54:35.4372289Z         	Messages:   	Project creation failed: test-acc-tf-p-1457762009393879525, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:54:35.4373578Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (111.74s)
```

- 2026-07-10 PASS 50 minutes
- 2026-07-11 PASS 21 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 30 minutes
- 2026-07-14 PASS 28 minutes
- 2026-07-15 PASS 34 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 26 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:31+00:00
```
2026-07-21T00:52:31.7759520Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-07-21T00:52:32.6416191Z     shared_resource.go:160: 
2026-07-21T00:52:32.6417676Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:32.6420042Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:32.6422228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:32.6424737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:32.6427092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:32.6429068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1198
2026-07-21T00:52:32.6429893Z         	Error:      	Received unexpected error:
2026-07-21T00:52:32.6433036Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:32.6434499Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2026-07-21T00:52:32.6437243Z         	Messages:   	Project creation failed: test-acc-tf-p-6216825244355099140, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:32.6438896Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (0.87s)
```

- 2026-07-22 PASS 40 minutes
- 2026-07-23

### Error 2026-07-23T00:48:23+00:00
```
2026-07-23T00:48:23.8558178Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-07-23T00:48:24.4597406Z     shared_resource.go:160: 
2026-07-23T00:48:24.4598465Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:24.4600273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:48:24.4602335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:48:24.4604058Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:48:24.4605758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:48:24.4607559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1198
2026-07-23T00:48:24.4608344Z         	Error:      	Received unexpected error:
2026-07-23T00:48:24.4611534Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:24.4613171Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2026-07-23T00:48:24.4615432Z         	Messages:   	Project creation failed: test-acc-tf-p-2409139376240237707, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:24.4616913Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (0.61s)
```

- 2026-07-24 PASS 41 minutes
- 2026-07-25 PASS 30 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 59 minutes
- 2026-07-29 PASS 30 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 23 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 minutes
- 2026-08-04 PASS 22 minutes
- 2026-08-05 PASS 21 minutes
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 31 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 31 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 24 minutes
  - PASS 29 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
