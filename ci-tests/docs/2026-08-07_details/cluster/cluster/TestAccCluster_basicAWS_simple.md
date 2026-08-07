# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-18 00:41](#error-2026-07-18t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-07-21 00:44](#error-2026-07-21t0044290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 29 minutes
- 2026-07-10 PASS 47 minutes
- 2026-07-11 PASS 19 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14 PASS 25 minutes
- 2026-07-15 PASS 32 minutes
- 2026-07-16 PASS 52 minutes
- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T00:41:18+00:00
```
2026-07-18T00:41:18.9146252Z === RUN   TestAccCluster_basicAWS_simple
2026-07-18T00:42:23.8399495Z     shared_resource.go:160: 
2026-07-18T00:42:23.8401028Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:42:23.8404212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-18T00:42:23.8406832Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-18T00:42:23.8409115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-18T00:42:23.8411427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-18T00:42:23.8413960Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:34
2026-07-18T00:42:23.8416304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:29
2026-07-18T00:42:23.8417113Z         	Error:      	Received unexpected error:
2026-07-18T00:42:23.8419060Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:23.8420108Z         	Test:       	TestAccCluster_basicAWS_simple
2026-07-18T00:42:23.8422407Z         	Messages:   	Project creation failed: test-acc-tf-p-8277256970754542367, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:42:23.8423599Z --- FAIL: TestAccCluster_basicAWS_simple (64.93s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:44:29+00:00
```
2026-07-21T00:44:29.8804233Z === RUN   TestAccCluster_basicAWS_simple
2026-07-21T00:45:47.9041516Z     shared_resource.go:160: 
2026-07-21T00:45:47.9042611Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:45:47.9044548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-07-21T00:45:47.9046767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-07-21T00:45:47.9048717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-07-21T00:45:47.9050705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-07-21T00:45:47.9052990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:34
2026-07-21T00:45:47.9055133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:29
2026-07-21T00:45:47.9056278Z         	Error:      	Received unexpected error:
2026-07-21T00:45:47.9058456Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:47.9059623Z         	Test:       	TestAccCluster_basicAWS_simple
2026-07-21T00:45:47.9061495Z         	Messages:   	Project creation failed: test-acc-tf-p-5950241482138757135, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:45:47.9062700Z --- FAIL: TestAccCluster_basicAWS_simple (78.02s)
```

- 2026-07-22 PASS 39 minutes
- 2026-07-23 PASS an hour
- 2026-07-24 PASS 41 minutes
- 2026-07-25 PASS 29 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 28 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 20 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 20 minutes
- 2026-08-04 PASS 20 minutes
- 2026-08-05 PASS 21 minutes
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
- 2026-07-26 PASS 22 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 20 minutes
  - PASS 19 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
