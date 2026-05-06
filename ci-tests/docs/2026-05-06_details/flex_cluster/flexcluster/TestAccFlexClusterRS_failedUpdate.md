# flex_cluster/flexcluster/TestAccFlexClusterRS_failedUpdate Test Details
# Found 36 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:43](#error-2026-04-11t0043500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 36 seconds
- 2026-04-09 PASS 5 minutes
- 2026-04-10 PASS 46 seconds
- 2026-04-11

### Error 2026-04-11T00:43:50+00:00
```
2026-04-11T00:43:50.1089396Z === RUN   TestAccFlexClusterRS_failedUpdate
2026-04-11T00:43:50.1090601Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-6597383009182557691
2026-04-11T00:45:32.2668526Z     resource_test.go:26: 
2026-04-11T00:45:32.2672616Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:32.2675451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:32.2677445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:32.2679422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:120
2026-04-11T00:45:32.2681759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:26
2026-04-11T00:45:32.2683042Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:45:32.2683884Z         	Error:      	Received unexpected error:
2026-04-11T00:45:32.2685943Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:32.2687075Z         	Test:       	TestAccFlexClusterRS_failedUpdate
2026-04-11T00:45:32.2688926Z         	Messages:   	Project creation failed: test-acc-tf-p-6597383009182557691, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:32.2690372Z --- FAIL: TestAccFlexClusterRS_failedUpdate (102.16s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 36 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 36 seconds
- 2026-04-16 PASS 41 seconds
- 2026-04-17 PASS 38 seconds
- 2026-04-18 PASS 40 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 37 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS a minute
- 2026-04-23 PASS 50 seconds
- 2026-04-24 PASS 38 seconds
- 2026-04-25 PASS 39 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 36 seconds
- 2026-04-28 PASS 44 seconds
- 2026-04-29 PASS 36 seconds
- 2026-04-30 PASS 2 minutes
- 2026-05-01 PASS a minute
- 2026-05-02 PASS 39 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 38 seconds
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 37 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 2 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04
  - PASS a minute
  - PASS 35 seconds
- 2026-05-05 PASS 36 seconds
- 2026-05-06 PASS a minute
