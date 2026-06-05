# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 3 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09 PASS 3 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 2 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16 PASS 35 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19 PASS 2 seconds
- 2026-05-20 PASS 4 seconds
- 2026-05-21 PASS 3 seconds
- 2026-05-22 PASS 3 seconds
- 2026-05-23 PASS 3 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27 PASS 3 seconds
- 2026-05-28 PASS 7 seconds
- 2026-05-29 PASS 5 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0136160Z === RUN   TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout
2026-05-30T01:08:14.0137069Z     resource_cloud_provider_access_setup_test.go:22: Creating execution project (1): test-acc-tf-p-7108825667447717918
2026-05-30T01:08:14.0137947Z     resource_cloud_provider_access_setup_test.go:22: 
2026-05-30T01:08:14.0138971Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0140791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0142590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0144748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:135
2026-05-30T01:08:14.0147049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:22
2026-05-30T01:08:14.0148741Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:14.0149296Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0151264Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0152512Z         	Test:       	TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout
2026-05-30T01:08:14.0154391Z         	Messages:   	Project creation failed: test-acc-tf-p-7108825667447717918, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0155681Z --- FAIL: TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout (61.47s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02 PASS 3 seconds
- 2026-06-03 PASS 3 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
