# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAzure_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 seconds
  - PASS 10 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09 PASS 12 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 8 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5555432Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-05-16T01:00:42.5557062Z     resource_cloud_provider_access_authorization_test.go:25: Creating execution project (1): test-acc-tf-p-9169369184881402633
2026-05-16T01:00:42.5558385Z     resource_cloud_provider_access_authorization_test.go:25: 
2026-05-16T01:00:42.5560235Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:42.5563655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:42.5567271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:42.5571601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:25
2026-05-16T01:00:42.5573597Z         	Error:      	Received unexpected error:
2026-05-16T01:00:42.5577430Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5579590Z         	Test:       	TestAccCloudProviderAccessAuthorizationAzure_basic
2026-05-16T01:00:42.5583019Z         	Messages:   	Project creation failed: test-acc-tf-p-9169369184881402633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5585758Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (65.90s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19 PASS 9 seconds
- 2026-05-20 PASS 9 seconds
- 2026-05-21 PASS 6 seconds
- 2026-05-22 PASS 6 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 7 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28 PASS 8 seconds
- 2026-05-29 PASS 9 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0066575Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2026-05-30T01:08:14.0067653Z     resource_cloud_provider_access_authorization_test.go:25: Creating execution project (1): test-acc-tf-p-8127056337277522375
2026-05-30T01:08:14.0068457Z     resource_cloud_provider_access_authorization_test.go:25: 
2026-05-30T01:08:14.0069690Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:14.0071526Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:14.0073328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:14.0075539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:25
2026-05-30T01:08:14.0076500Z         	Error:      	Received unexpected error:
2026-05-30T01:08:14.0078711Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0079850Z         	Test:       	TestAccCloudProviderAccessAuthorizationAzure_basic
2026-05-30T01:08:14.0081651Z         	Messages:   	Project creation failed: test-acc-tf-p-8127056337277522375, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0082976Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (74.40s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 10 seconds
- 2026-06-02 PASS 9 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 4 seconds
- 2026-06-05 PASS 9 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 10 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
