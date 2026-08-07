# cluster/cluster/TestAccCluster_Global Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:46](#error-2026-07-18t0046300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-07-21 00:52](#error-2026-07-21t0052270000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-23 00:47](#error-2026-07-23t0047210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 27 minutes
- 2026-07-10 PASS 59 minutes
- 2026-07-11 PASS 17 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 21 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 19 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 28 minutes
- 2026-07-18

### Error 2026-07-18T00:46:30+00:00
```
2026-07-18T00:46:30.1955006Z === RUN   TestAccCluster_Global
2026-07-18T00:47:46.0212064Z     shared_resource.go:160: 
2026-07-18T00:47:46.0215815Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:47:46.0220795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:47:46.0224528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:47:46.0227684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:47:46.0230774Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:47:46.0233649Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-07-18T00:47:46.0234937Z         	Error:      	Received unexpected error:
2026-07-18T00:47:46.0237858Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:47:46.0239363Z         	Test:       	TestAccCluster_Global
2026-07-18T00:47:46.0242413Z         	Messages:   	Project creation failed: test-acc-tf-p-8433562517903074633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:47:46.0244447Z --- FAIL: TestAccCluster_Global (75.83s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:27+00:00
```
2026-07-21T00:52:27.5459551Z === RUN   TestAccCluster_Global
2026-07-21T00:52:27.8201778Z     shared_resource.go:160: 
2026-07-21T00:52:27.8203994Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:27.8208338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:27.8212192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:27.8216302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:27.8220273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:27.8224322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-07-21T00:52:27.8226422Z         	Error:      	Received unexpected error:
2026-07-21T00:52:27.8232326Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.8235251Z         	Test:       	TestAccCluster_Global
2026-07-21T00:52:27.8240221Z         	Messages:   	Project creation failed: test-acc-tf-p-6489593085496801548, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:52:27.8243145Z --- FAIL: TestAccCluster_Global (0.28s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:47:21+00:00
```
2026-07-23T00:47:21.0480923Z === RUN   TestAccCluster_Global
2026-07-23T00:48:22.6834897Z     shared_resource.go:160: 
2026-07-23T00:48:22.6838798Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:22.6841421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-23T00:48:22.6844322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-23T00:48:22.6846156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-23T00:48:22.6847913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-23T00:48:22.6849762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:588
2026-07-23T00:48:22.6850564Z         	Error:      	Received unexpected error:
2026-07-23T00:48:22.6852755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.6854319Z         	Test:       	TestAccCluster_Global
2026-07-23T00:48:22.6856032Z         	Messages:   	Project creation failed: test-acc-tf-p-7861911085732970430, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:22.6857116Z --- FAIL: TestAccCluster_Global (61.64s)
```

- 2026-07-24 PASS 48 minutes
- 2026-07-25 PASS 21 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 19 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 16 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 21 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 21 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 20 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
