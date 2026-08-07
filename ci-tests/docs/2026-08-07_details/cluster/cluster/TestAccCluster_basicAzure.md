# cluster/cluster/TestAccCluster_basicAzure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:51](#error-2026-07-21t0051210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 35 minutes
- 2026-07-10 PASS 50 minutes
- 2026-07-11 PASS 17 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 23 minutes
- 2026-07-14 PASS 19 minutes
- 2026-07-15 PASS 29 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 15 minutes
- 2026-07-18 PASS 24 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:21+00:00
```
2026-07-21T00:51:21.1060774Z === RUN   TestAccCluster_basicAzure
2026-07-21T00:52:24.2187229Z     shared_resource.go:160: 
2026-07-21T00:52:24.2189089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:24.2191552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:52:24.2193747Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:52:24.2196194Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:52:24.2198384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:52:24.2200457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:334
2026-07-21T00:52:24.2201312Z         	Error:      	Received unexpected error:
2026-07-21T00:52:24.2203879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:24.2204945Z         	Test:       	TestAccCluster_basicAzure
2026-07-21T00:52:24.2206998Z         	Messages:   	Project creation failed: test-acc-tf-p-5342515584788772597, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:24.2208226Z --- FAIL: TestAccCluster_basicAzure (63.11s)
```

- 2026-07-22 PASS 40 minutes
- 2026-07-23 PASS 58 minutes
- 2026-07-24 PASS 32 minutes
- 2026-07-25 PASS 21 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 23 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 18 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 minutes
- 2026-08-04 PASS 18 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 21 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 22 minutes
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
  - PASS 17 minutes
  - PASS 18 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
