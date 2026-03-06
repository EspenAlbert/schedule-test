# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:39](#error-2026-03-03t0039460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s
[2026-03-05 00:39](#error-2026-03-05t0039030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 47 seconds
- 2026-02-06 PASS 47 seconds
- 2026-02-07 PASS 48 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 48 seconds
- 2026-02-10 PASS 48 seconds
- 2026-02-11 PASS 47 seconds
- 2026-02-12 PASS 47 seconds
- 2026-02-13 PASS 47 seconds
- 2026-02-14 PASS 46 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 46 seconds
- 2026-02-17 PASS a minute
- 2026-02-18 PASS 46 seconds
- 2026-02-19 PASS a minute
- 2026-02-20 PASS 45 seconds
- 2026-02-21 PASS a minute
- 2026-02-22: MISSING
- 2026-02-23 PASS 47 seconds
- 2026-02-24 PASS a minute
- 2026-02-25 PASS 49 seconds
- 2026-02-26 PASS a minute
- 2026-02-27 PASS a minute
- 2026-02-28 PASS 48 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 51 seconds
- 2026-03-03

### Error 2026-03-03T00:39:46+00:00
```
2026-03-03T00:39:46.6531665Z === RUN   TestAccFlexClusterRS_basic
2026-03-03T00:39:46.6535490Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-4841850497297482602
2026-03-03T00:40:57.0874659Z     resource_test.go:20: 
2026-03-03T00:40:57.0876160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-03T00:40:57.0879170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-03T00:40:57.0881961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-03T00:40:57.0884683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-03-03T00:40:57.0887129Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-03-03T00:40:57.0889087Z         	            				/opt/hostedtoolcache/go/1.26.0/x64/src/runtime/asm_amd64.s:1771
2026-03-03T00:40:57.0889719Z         	Error:      	Received unexpected error:
2026-03-03T00:40:57.0892088Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:40:57.0893171Z         	Test:       	TestAccFlexClusterRS_basic
2026-03-03T00:40:57.0895316Z         	Messages:   	Project creation failed: test-acc-tf-p-4841850497297482602, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:40:57.0896507Z --- FAIL: TestAccFlexClusterRS_basic (70.43s)
```

- 2026-03-04 PASS 50 seconds
- 2026-03-05

### Error 2026-03-05T00:39:03+00:00
```
2026-03-05T00:39:03.8935756Z === RUN   TestAccFlexClusterRS_basic
2026-03-05T00:39:03.8938634Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-8092214913387763079
2026-03-05T00:40:06.9739761Z     resource_test.go:20: 
2026-03-05T00:40:06.9741786Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-05T00:40:06.9744379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-05T00:40:06.9746625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-03-05T00:40:06.9748921Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-03-05T00:40:06.9751893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-03-05T00:40:06.9753372Z         	            				/opt/hostedtoolcache/go/1.26.0/x64/src/runtime/asm_amd64.s:1771
2026-03-05T00:40:06.9753992Z         	Error:      	Received unexpected error:
2026-03-05T00:40:06.9756376Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:40:06.9757710Z         	Test:       	TestAccFlexClusterRS_basic
2026-03-05T00:40:06.9759865Z         	Messages:   	Project creation failed: test-acc-tf-p-8092214913387763079, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:40:06.9761464Z --- FAIL: TestAccFlexClusterRS_basic (63.08s)
```

- 2026-03-06 PASS 47 seconds

## QA Environment
### Timeline
- 2026-02-04
  - PASS 42 seconds
  - PASS 44 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 43 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 47 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 45 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 46 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 45 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 44 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
