# config/cloudprovideraccess/TestAccCloudProviderAccessSetupGCP_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7684177Z === RUN   TestAccCloudProviderAccessSetupGCP_basic
2026-07-09T00:58:00.7684920Z     resource_cloud_provider_access_setup_test.go:74: Creating execution project (1): test-acc-tf-p-423422404349818304
2026-07-09T00:58:00.7685936Z     resource_cloud_provider_access_setup_test.go:74: 
2026-07-09T00:58:00.7687105Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7689031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7690917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7693312Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:74
2026-07-09T00:58:00.7694274Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7696494Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7697614Z         	Test:       	TestAccCloudProviderAccessSetupGCP_basic
2026-07-09T00:58:00.7699473Z         	Messages:   	Project creation failed: test-acc-tf-p-423422404349818304, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7700730Z --- FAIL: TestAccCloudProviderAccessSetupGCP_basic (63.07s)
```

- 2026-07-10 PASS 38 seconds
- 2026-07-11 PASS 39 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 33 seconds
- 2026-07-14 PASS 33 seconds
- 2026-07-15 PASS 37 seconds
- 2026-07-16 PASS 35 seconds
- 2026-07-17 PASS 34 seconds
- 2026-07-18 PASS 39 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 36 seconds
- 2026-07-22 PASS 35 seconds
- 2026-07-23 PASS 33 seconds
- 2026-07-24 PASS 43 seconds
- 2026-07-25 PASS 34 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 34 seconds
- 2026-07-28 PASS 33 seconds
- 2026-07-29 PASS 32 seconds
- 2026-07-30 PASS 35 seconds
- 2026-07-31 PASS 38 seconds
- 2026-08-01 PASS 34 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 32 seconds
- 2026-08-04 PASS 39 seconds
- 2026-08-05 PASS 34 seconds
- 2026-08-06 PASS 39 seconds
- 2026-08-07 PASS 34 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 36 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 34 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 35 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 34 seconds
  - PASS 33 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 37 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
