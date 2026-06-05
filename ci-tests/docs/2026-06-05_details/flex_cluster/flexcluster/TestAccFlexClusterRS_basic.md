# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:54](#error-2026-05-16t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s
[2026-05-19 01:00](#error-2026-05-19t0100510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-21 01:02](#error-2026-05-21t0102550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s
[2026-06-03 01:14](#error-2026-06-03t0114430000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 54 seconds
- 2026-05-08 PASS 45 seconds
- 2026-05-09 PASS 5 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 44 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 44 seconds
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 46 seconds
- 2026-05-16

### Error 2026-05-16T00:54:09+00:00
```
2026-05-16T00:54:09.7170902Z === RUN   TestAccFlexClusterRS_basic
2026-05-16T00:54:09.7172397Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-1631229395308149489
2026-05-16T00:55:20.1107638Z     resource_test.go:25: 
2026-05-16T00:55:20.1109502Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:20.1113945Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:55:20.1116448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:55:20.1118595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-05-16T00:55:20.1120499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-05-16T00:55:20.1122001Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:55:20.1122515Z         	Error:      	Received unexpected error:
2026-05-16T00:55:20.1124459Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:20.1125497Z         	Test:       	TestAccFlexClusterRS_basic
2026-05-16T00:55:20.1127242Z         	Messages:   	Project creation failed: test-acc-tf-p-1631229395308149489, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:20.1128381Z --- FAIL: TestAccFlexClusterRS_basic (70.39s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 54 seconds
- 2026-05-19

### Error 2026-05-19T01:00:51+00:00
```
2026-05-19T01:00:51.9459053Z === RUN   TestAccFlexClusterRS_basic
2026-05-19T01:00:51.9460411Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-5129030122270404826
2026-05-19T01:01:59.1332070Z     resource_test.go:25: 
2026-05-19T01:01:59.1333454Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:01:59.1336156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:01:59.1338628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:01:59.1340715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-05-19T01:01:59.1342770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-05-19T01:01:59.1344038Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:01:59.1344583Z         	Error:      	Received unexpected error:
2026-05-19T01:01:59.1346540Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:01:59.1347820Z         	Test:       	TestAccFlexClusterRS_basic
2026-05-19T01:01:59.1349523Z         	Messages:   	Project creation failed: test-acc-tf-p-5129030122270404826, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:01:59.1350709Z --- FAIL: TestAccFlexClusterRS_basic (67.19s)
```

- 2026-05-20 PASS 45 seconds
- 2026-05-21

### Error 2026-05-21T01:02:55+00:00
```
2026-05-21T01:02:55.9708196Z === RUN   TestAccFlexClusterRS_basic
2026-05-21T01:02:55.9709069Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6143834891947572042
2026-05-21T01:04:24.1960096Z     resource_test.go:25: 
2026-05-21T01:04:24.1961879Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:04:24.1966055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:04:24.1969514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:04:24.1972895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-05-21T01:04:24.1975296Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-05-21T01:04:24.1976554Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:04:24.1977093Z         	Error:      	Received unexpected error:
2026-05-21T01:04:24.1979053Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:24.1980089Z         	Test:       	TestAccFlexClusterRS_basic
2026-05-21T01:04:24.1981859Z         	Messages:   	Project creation failed: test-acc-tf-p-6143834891947572042, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:24.1983025Z --- FAIL: TestAccFlexClusterRS_basic (88.22s)
```

- 2026-05-22 PASS 47 seconds
- 2026-05-23 PASS 57 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 50 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 52 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 55 seconds
- 2026-06-02 PASS a minute
- 2026-06-03

### Error 2026-06-03T01:14:43+00:00
```
2026-06-03T01:14:43.7158837Z === RUN   TestAccFlexClusterRS_basic
2026-06-03T01:14:43.7159880Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-8885186884395394252
2026-06-03T01:14:48.7170055Z     resource_test.go:25: 
2026-06-03T01:14:48.7171621Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-03T01:14:48.7175161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-03T01:14:48.7178433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-03T01:14:48.7181101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:104
2026-06-03T01:14:48.7183015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:25
2026-06-03T01:14:48.7184231Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-03T01:14:48.7184792Z         	Error:      	Received unexpected error:
2026-06-03T01:14:48.7185881Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-03T01:14:48.7186535Z         	Test:       	TestAccFlexClusterRS_basic
2026-06-03T01:14:48.7187709Z         	Messages:   	Project creation failed: test-acc-tf-p-8885186884395394252, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-03T01:14:48.7188793Z --- FAIL: TestAccFlexClusterRS_basic (5.00s)
```

- 2026-06-04 PASS 4 minutes
- 2026-06-05 PASS 43 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a minute
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a minute
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a minute
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
