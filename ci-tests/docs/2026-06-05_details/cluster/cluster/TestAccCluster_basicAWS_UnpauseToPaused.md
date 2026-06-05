# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:02](#error-2026-05-09t0102590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-05-28 01:01](#error-2026-05-28t0101000000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 38 minutes
  - PASS 59 minutes
- 2026-05-08 PASS 26 minutes
- 2026-05-09

### Error 2026-05-09T01:02:59+00:00
```
2026-05-09T01:02:59.8368629Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-05-09T01:04:06.6849294Z     shared_resource.go:160: 
2026-05-09T01:04:06.6851023Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:04:06.6853325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:04:06.6855322Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:04:06.6857293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:04:06.6859691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:04:06.6861862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1221
2026-05-09T01:04:06.6862593Z         	Error:      	Received unexpected error:
2026-05-09T01:04:06.6866827Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:04:06.6867902Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2026-05-09T01:04:06.6869580Z         	Messages:   	Project creation failed: test-acc-tf-p-4783474963723174119, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:04:06.6870673Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (66.85s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 25 minutes
- 2026-05-12 PASS 22 minutes
- 2026-05-13 PASS 27 minutes
- 2026-05-14 PASS 46 minutes
- 2026-05-15 PASS 25 minutes
- 2026-05-16 PASS 20 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 41 minutes
- 2026-05-19 PASS 20 minutes
- 2026-05-20 PASS 24 minutes
- 2026-05-21 PASS 27 minutes
- 2026-05-22 PASS 36 minutes
- 2026-05-23 PASS 29 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 23 minutes
- 2026-05-27 PASS 51 minutes
- 2026-05-28

### Error 2026-05-28T01:01:00+00:00
```
2026-05-28T01:01:00.1827045Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-05-28T01:01:01.2408829Z     shared_resource.go:160: 
2026-05-28T01:01:01.2410115Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:01.2411765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:01.2413546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:01.2415181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:01.2416829Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:01.2418578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1198
2026-05-28T01:01:01.2419324Z         	Error:      	Received unexpected error:
2026-05-28T01:01:01.2421854Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:01.2423248Z         	Test:       	TestAccCluster_basicAWS_UnpauseToPaused
2026-05-28T01:01:01.2425388Z         	Messages:   	Project creation failed: test-acc-tf-p-1908396251446985734, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:01.2427283Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1.06s)
```

- 2026-05-29 PASS 23 minutes
- 2026-05-30 PASS 21 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 21 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 43 minutes
- 2026-06-04 PASS 33 minutes
- 2026-06-05 PASS 28 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 27 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 22 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
