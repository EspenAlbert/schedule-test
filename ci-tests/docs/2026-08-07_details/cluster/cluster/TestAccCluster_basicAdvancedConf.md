# cluster/cluster/TestAccCluster_basicAdvancedConf Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:49](#error-2026-07-21t0049370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 30 minutes
- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 23 minutes
- 2026-07-15 PASS 34 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 37 minutes
- 2026-07-18 PASS 27 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:49:37+00:00
```
2026-07-21T00:49:37.6161213Z === RUN   TestAccCluster_basicAdvancedConf
2026-07-21T00:51:21.1040069Z     shared_resource.go:160: 
2026-07-21T00:51:21.1041296Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:51:21.1043375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:51:21.1045413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:51:21.1047839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:51:21.1050017Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:51:21.1052303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:264
2026-07-21T00:51:21.1053272Z         	Error:      	Received unexpected error:
2026-07-21T00:51:21.1055758Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:21.1057008Z         	Test:       	TestAccCluster_basicAdvancedConf
2026-07-21T00:51:21.1059136Z         	Messages:   	Project creation failed: test-acc-tf-p-8026334412786510122, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:21.1060416Z --- FAIL: TestAccCluster_basicAdvancedConf (103.49s)
```

- 2026-07-22 PASS 40 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 41 minutes
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 22 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 minutes
- 2026-08-04 PASS 19 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 19 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 minutes
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
- 2026-07-26 PASS 23 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 22 minutes
  - PASS 25 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 20 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
