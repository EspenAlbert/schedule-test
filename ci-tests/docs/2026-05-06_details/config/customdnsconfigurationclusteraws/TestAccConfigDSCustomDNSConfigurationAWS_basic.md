# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.05s
[2026-04-11 00:45](#error-2026-04-11t0045470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.04s
[2026-05-05 00:54](#error-2026-05-05t0054230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 36 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09

### Error 2026-04-09T00:40:57+00:00
```
2026-04-09T00:40:57.4482688Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-09T00:40:57.4487395Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-09T00:40:57.4531146Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-09T00:40:57.4532188Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-04-09T00:40:57.4532938Z         
2026-04-09T00:40:57.4533540Z         Error: error creating project: test-acc-tf-p-7439528073208942447
2026-04-09T00:40:57.4534032Z         
2026-04-09T00:40:57.4534451Z           with mongodbatlas_project.test,
2026-04-09T00:40:57.4535311Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:57.4536525Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:57.4536941Z         
2026-04-09T00:40:57.4537852Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:57.4538789Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:57.4539639Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:57.4540324Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (82.47s)
```

- 2026-04-10 PASS 8 seconds
- 2026-04-11

### Error 2026-04-11T00:45:47+00:00
```
2026-04-11T00:45:47.3768182Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3770901Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3785820Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-11T00:45:47.3786587Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:45:47.3787170Z         
2026-04-11T00:45:47.3787761Z         Error: error creating project: test-acc-tf-p-4789830005142256408
2026-04-11T00:45:47.3788114Z         
2026-04-11T00:45:47.3788416Z           with mongodbatlas_project.test,
2026-04-11T00:45:47.3788987Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:47.3789783Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:47.3790079Z         
2026-04-11T00:45:47.3790524Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:47.3791129Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:47.3791668Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:47.3792118Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (62.55s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 7 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 9 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 11 seconds
- 2026-04-18 PASS 54 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 8 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS 10 seconds
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 36 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 8 seconds
- 2026-04-28 PASS 27 seconds
- 2026-04-29 PASS 9 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.7149155Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-30T01:01:13.7153072Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-30T01:01:13.7209869Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-04-30T01:01:13.7211320Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-04-30T01:01:13.7212372Z         
2026-04-30T01:01:13.7213221Z         Error: error creating project: test-acc-tf-p-4415723676883050116
2026-04-30T01:01:13.7214028Z         
2026-04-30T01:01:13.7214780Z           with mongodbatlas_project.test,
2026-04-30T01:01:13.7215994Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:13.7217151Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:13.7217825Z         
2026-04-30T01:01:13.7218796Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:13.7220213Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:13.7221408Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7222391Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (71.41s)
```

- 2026-05-01 PASS 7 seconds
- 2026-05-02 PASS 49 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 seconds
- 2026-05-05

### Error 2026-05-05T00:54:23+00:00
```
2026-05-05T00:54:23.5610813Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-05T00:54:23.5614578Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-05T00:54:23.5669293Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-05T00:54:23.5670781Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-05T00:54:23.5671920Z         
2026-05-05T00:54:23.5672703Z         Error: error creating project: test-acc-tf-p-5484963833123709646
2026-05-05T00:54:23.5673354Z         
2026-05-05T00:54:23.5673892Z           with mongodbatlas_project.test,
2026-05-05T00:54:23.5675029Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-05T00:54:23.5676090Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-05T00:54:23.5676636Z         
2026-05-05T00:54:23.5677487Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-05T00:54:23.5678976Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-05T00:54:23.5680125Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:23.5681000Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (91.99s)
```

- 2026-05-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 8 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 9 seconds
