# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.10s
[2026-04-11 00:45](#error-2026-04-11t0045470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 103.02s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-05 00:54](#error-2026-05-05t0054230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 28 seconds
- 2026-04-08 PASS 13 seconds
- 2026-04-09

### Error 2026-04-09T00:40:57+00:00
```
2026-04-09T00:40:57.4484294Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-09T00:40:57.4488260Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-09T00:40:57.4505904Z   
2026-04-09T00:40:57.4506738Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-04-09T00:40:57.4507642Z         
2026-04-09T00:40:57.4508251Z         Error: error creating project: test-acc-tf-p-3910775776228502441
2026-04-09T00:40:57.4508781Z         
2026-04-09T00:40:57.4509204Z           with mongodbatlas_project.test,
2026-04-09T00:40:57.4510052Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:57.4510852Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:57.4511284Z         
2026-04-09T00:40:57.4511948Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:57.4512833Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:57.4513665Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:57.4514602Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (78.98s)
```

- 2026-04-10 PASS 14 seconds
- 2026-04-11

### Error 2026-04-11T00:45:47+00:00
```
2026-04-11T00:45:47.3769648Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3771938Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3785527Z   
2026-04-11T00:45:47.3803880Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3804611Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-04-11T00:45:47.3805083Z         
2026-04-11T00:45:47.3805608Z         Error: error creating project: test-acc-tf-p-8304519467330617936
2026-04-11T00:45:47.3805959Z         
2026-04-11T00:45:47.3806350Z           with mongodbatlas_project.test,
2026-04-11T00:45:47.3807058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:47.3807780Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:47.3808127Z         
2026-04-11T00:45:47.3808641Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:47.3809316Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:47.3810012Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:47.3810701Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (103.23s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 13 seconds
- 2026-04-14 PASS 22 seconds
- 2026-04-15 PASS 17 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 19 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 20 seconds
- 2026-04-21 PASS 33 seconds
- 2026-04-22 PASS 12 seconds
- 2026-04-23 PASS 21 seconds
- 2026-04-24 PASS 17 seconds
- 2026-04-25 PASS 45 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 seconds
- 2026-04-28 PASS 34 seconds
- 2026-04-29 PASS 22 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.7151378Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-30T01:01:13.7153904Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-04-30T01:01:13.7174994Z   
2026-04-30T01:01:13.7176096Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-04-30T01:01:13.7177142Z         
2026-04-30T01:01:13.7177996Z         Error: error creating project: test-acc-tf-p-633875212887485018
2026-04-30T01:01:13.7179072Z         
2026-04-30T01:01:13.7179863Z           with mongodbatlas_project.test,
2026-04-30T01:01:13.7181078Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:13.7182210Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:13.7182903Z         
2026-04-30T01:01:13.7183854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:13.7185081Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:13.7186260Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7187207Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (63.09s)
```

- 2026-05-01 PASS 14 seconds
- 2026-05-02 PASS 27 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 13 seconds
- 2026-05-05

### Error 2026-05-05T00:54:23+00:00
```
2026-05-05T00:54:23.5613037Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-05T00:54:23.5615294Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-05T00:54:23.5636139Z   
2026-05-05T00:54:23.5637182Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-05T00:54:23.5638100Z         
2026-05-05T00:54:23.5638877Z         Error: error creating project: test-acc-tf-p-7656406171380471900
2026-05-05T00:54:23.5639524Z         
2026-05-05T00:54:23.5640074Z           with mongodbatlas_project.test,
2026-05-05T00:54:23.5641259Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:54:23.5642761Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:54:23.5643297Z         
2026-05-05T00:54:23.5644175Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:54:23.5645408Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:54:23.5646540Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:23.5647389Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (85.62s)
```

- 2026-05-06 PASS 19 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 11 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 10 seconds
  - PASS 12 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 14 seconds
- 2026-05-04 PASS 16 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 seconds
