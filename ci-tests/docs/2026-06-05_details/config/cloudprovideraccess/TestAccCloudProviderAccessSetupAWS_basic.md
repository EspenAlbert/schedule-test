# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09 PASS 8 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 5 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 3 seconds
- 2026-05-15 PASS 4 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5617479Z === RUN   TestAccCloudProviderAccessSetupAWS_basic
2026-05-16T01:00:42.5618763Z     resource_cloud_provider_access_setup_test.go:18: Creating execution project (1): test-acc-tf-p-7145427403319118799
2026-05-16T01:00:42.5619941Z     resource_cloud_provider_access_setup_test.go:18: 
2026-05-16T01:00:42.5621736Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5625407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5629139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5633414Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:103
2026-05-16T01:00:42.5637899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:18
2026-05-16T01:00:42.5640280Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:00:42.5641164Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5644675Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5646785Z         	Test:       	TestAccCloudProviderAccessSetupAWS_basic
2026-05-16T01:00:42.5649640Z         	Messages:   	Project creation failed: test-acc-tf-p-7145427403319118799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5651077Z --- FAIL: TestAccCloudProviderAccessSetupAWS_basic (67.41s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 6 seconds
- 2026-05-20 PASS 5 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 4 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27 PASS 4 seconds
- 2026-05-28 PASS 7 seconds
- 2026-05-29 PASS 3 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0101330Z === RUN   TestAccCloudProviderAccessSetupAWS_basic
2026-05-30T01:08:14.0102329Z     resource_cloud_provider_access_setup_test.go:18: Creating execution project (1): test-acc-tf-p-3223122964302707124
2026-05-30T01:08:14.0103230Z     resource_cloud_provider_access_setup_test.go:18: 
2026-05-30T01:08:14.0104474Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0106602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0108924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0111347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:103
2026-05-30T01:08:14.0113896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:18
2026-05-30T01:08:14.0127653Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:14.0128548Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0131383Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0132537Z         	Test:       	TestAccCloudProviderAccessSetupAWS_basic
2026-05-30T01:08:14.0134353Z         	Messages:   	Project creation failed: test-acc-tf-p-3223122964302707124, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0135565Z --- FAIL: TestAccCloudProviderAccessSetupAWS_basic (63.58s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 5 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 4 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
