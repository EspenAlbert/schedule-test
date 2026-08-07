# network/networkcontainer/TestAccNetworkContainer_withRegionsGCP Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:55](#error-2026-07-09t0055240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-07-21 00:51](#error-2026-07-21t0051260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:55:24+00:00
```
2026-07-09T00:55:24.1881904Z === RUN   TestAccNetworkContainer_withRegionsGCP
2026-07-09T00:55:24.1882602Z     resource_network_container_test.go:109: Creating execution project (1): test-acc-tf-p-4030146791676935198
2026-07-09T00:55:24.1883230Z     resource_network_container_test.go:109: 
2026-07-09T00:55:24.1884211Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:55:24.1886053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:55:24.1888041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:55:24.1890383Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:109
2026-07-09T00:55:24.1891298Z         	Error:      	Received unexpected error:
2026-07-09T00:55:24.1893276Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:24.1894376Z         	Test:       	TestAccNetworkContainer_withRegionsGCP
2026-07-09T00:55:24.1896181Z         	Messages:   	Project creation failed: test-acc-tf-p-4030146791676935198, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:55:24.1897433Z --- FAIL: TestAccNetworkContainer_withRegionsGCP (68.37s)
```

- 2026-07-10 PASS 2 minutes
- 2026-07-11 PASS 2 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 minutes
- 2026-07-14 PASS 2 minutes
- 2026-07-15 PASS 2 minutes
- 2026-07-16 PASS 2 minutes
- 2026-07-17 PASS 2 minutes
- 2026-07-18 PASS 2 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:51:26+00:00
```
2026-07-21T00:51:26.4859116Z === RUN   TestAccNetworkContainer_withRegionsGCP
2026-07-21T00:51:26.4859836Z     resource_network_container_test.go:109: Creating execution project (1): test-acc-tf-p-295758578965618614
2026-07-21T00:51:26.4860477Z     resource_network_container_test.go:109: 
2026-07-21T00:51:26.4861490Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:51:26.4863787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:51:26.4865951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:51:26.4868124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/networkcontainer/resource_network_container_test.go:109
2026-07-21T00:51:26.4869059Z         	Error:      	Received unexpected error:
2026-07-21T00:51:26.4871102Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4872227Z         	Test:       	TestAccNetworkContainer_withRegionsGCP
2026-07-21T00:51:26.4874491Z         	Messages:   	Project creation failed: test-acc-tf-p-295758578965618614, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:51:26.4875792Z --- FAIL: TestAccNetworkContainer_withRegionsGCP (118.13s)
```

- 2026-07-22 PASS 2 minutes
- 2026-07-23 PASS 2 minutes
- 2026-07-24 PASS 2 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 minutes
- 2026-07-28 PASS 2 minutes
- 2026-07-29 PASS 2 minutes
- 2026-07-30 PASS 2 minutes
- 2026-07-31 PASS 2 minutes
- 2026-08-01 PASS 2 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 minutes
- 2026-08-04 PASS 2 minutes
- 2026-08-05 PASS 2 minutes
- 2026-08-06 PASS 2 minutes
- 2026-08-07 PASS 2 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 2 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
