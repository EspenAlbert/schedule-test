# config/cloudprovideraccess/TestAccCloudProviderAccessSetupGCP_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 34 seconds
  - PASS 35 seconds
- 2026-05-08 PASS 33 seconds
- 2026-05-09 PASS 38 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 39 seconds
- 2026-05-12 PASS 35 seconds
- 2026-05-13 PASS 35 seconds
- 2026-05-14 PASS 34 seconds
- 2026-05-15 PASS 37 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 36 seconds
- 2026-05-19 PASS 36 seconds
- 2026-05-20 PASS 37 seconds
- 2026-05-21 PASS 36 seconds
- 2026-05-22 PASS 34 seconds
- 2026-05-23 PASS 38 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 36 seconds
- 2026-05-26 PASS 35 seconds
- 2026-05-27 PASS 38 seconds
- 2026-05-28 PASS 36 seconds
- 2026-05-29 PASS 33 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0172096Z === RUN   TestAccCloudProviderAccessSetupGCP_basic
2026-05-30T01:08:14.0172849Z     resource_cloud_provider_access_setup_test.go:74: Creating execution project (1): test-acc-tf-p-6792474256639582209
2026-05-30T01:08:14.0173532Z     resource_cloud_provider_access_setup_test.go:74: 
2026-05-30T01:08:14.0174523Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0176304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0178234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0180420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:74
2026-05-30T01:08:14.0181369Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0183564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0184632Z         	Test:       	TestAccCloudProviderAccessSetupGCP_basic
2026-05-30T01:08:14.0186386Z         	Messages:   	Project creation failed: test-acc-tf-p-6792474256639582209, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0187683Z --- FAIL: TestAccCloudProviderAccessSetupGCP_basic (67.32s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 33 seconds
- 2026-06-02 PASS 38 seconds
- 2026-06-03 PASS 38 seconds
- 2026-06-04 PASS 34 seconds
- 2026-06-05 PASS 38 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 37 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 35 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 34 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 33 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
