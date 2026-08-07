# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7646538Z === RUN   TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout
2026-07-09T00:58:00.7647420Z     resource_cloud_provider_access_setup_test.go:22: Creating execution project (1): test-acc-tf-p-5227405931725078789
2026-07-09T00:58:00.7648101Z     resource_cloud_provider_access_setup_test.go:22: 
2026-07-09T00:58:00.7649118Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:00.7651159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:00.7653050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:00.7655538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:135
2026-07-09T00:58:00.7658103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:22
2026-07-09T00:58:00.7659496Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:58:00.7660033Z         	Error:      	Received unexpected error:
2026-07-09T00:58:00.7662089Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7663406Z         	Test:       	TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout
2026-07-09T00:58:00.7665677Z         	Messages:   	Project creation failed: test-acc-tf-p-5227405931725078789, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7667096Z --- FAIL: TestAccCloudProviderAccessSetupAWS_createTimeoutWithDeleteOnCreateTimeout (69.08s)
```

- 2026-07-10 PASS 3 seconds
- 2026-07-11 PASS 8 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14 PASS 3 seconds
- 2026-07-15 PASS 3 seconds
- 2026-07-16 PASS 3 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 11 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 4 seconds
- 2026-07-22 PASS 7 seconds
- 2026-07-23 PASS 3 seconds
- 2026-07-24 PASS 7 seconds
- 2026-07-25 PASS 7 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 7 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 5 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 3 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 5 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 7 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
