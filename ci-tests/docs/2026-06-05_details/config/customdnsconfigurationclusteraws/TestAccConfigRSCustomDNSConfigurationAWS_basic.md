# config/customdnsconfigurationclusteraws/TestAccConfigRSCustomDNSConfigurationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.01s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.01s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.00s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-05-23 01:01](#error-2026-05-23t0101300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.03s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 108.09s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.04s
[2026-06-02 01:11](#error-2026-06-02t0111090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 40 seconds
  - PASS 21 seconds
- 2026-05-08 PASS 14 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.4041869Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4042811Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4051954Z   
2026-05-09T00:59:14.4084880Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4085796Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-09T00:59:14.4086457Z         
2026-05-09T00:59:14.4087003Z         Error: error creating project: test-acc-tf-p-1859940860191629754
2026-05-09T00:59:14.4087463Z         
2026-05-09T00:59:14.4087811Z           with mongodbatlas_project.test,
2026-05-09T00:59:14.4088589Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:59:14.4089323Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:59:14.4089708Z         
2026-05-09T00:59:14.4090325Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:59:14.4091142Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:59:14.4091902Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.4092688Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (99.11s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 18 seconds
- 2026-05-12 PASS 42 seconds
- 2026-05-13 PASS 18 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 16 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5726825Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-16T01:00:42.5728064Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-16T01:00:42.5738990Z    test_name=TestAccConfigRSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/43d41574-012d-4093-9228-4c93925014ea/terraform
2026-05-16T01:00:42.5740044Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-16T01:00:42.5740555Z         
2026-05-16T01:00:42.5740980Z         Error: error creating project: test-acc-tf-p-5035287955720732133
2026-05-16T01:00:42.5741343Z         
2026-05-16T01:00:42.5741647Z           with mongodbatlas_project.test,
2026-05-16T01:00:42.5742258Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:00:42.5742957Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:00:42.5743267Z         
2026-05-16T01:00:42.5743737Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:00:42.5744397Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:00:42.5744995Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5745581Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (75.10s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 20 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.9083430Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9086363Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9109020Z   
2026-05-19T01:08:20.9147631Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9148972Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:08:20.9149984Z         
2026-05-19T01:08:20.9150828Z         Error: error creating project: test-acc-tf-p-566452471112991241
2026-05-19T01:08:20.9151554Z         
2026-05-19T01:08:20.9152199Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9153387Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9154840Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9155510Z         
2026-05-19T01:08:20.9156467Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9157719Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9158863Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9159799Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (93.03s)
```

- 2026-05-20 PASS 20 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7240036Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-21T01:07:04.7241285Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-21T01:07:04.7252686Z   
2026-05-21T01:07:04.7253265Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:07:04.7253789Z         
2026-05-21T01:07:04.7254225Z         Error: error creating project: test-acc-tf-p-2650195972277081747
2026-05-21T01:07:04.7254606Z         
2026-05-21T01:07:04.7254924Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7255560Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7256153Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7256466Z         
2026-05-21T01:07:04.7256952Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7257631Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7258246Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7258733Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (63.64s)
```

- 2026-05-22 PASS 19 seconds
- 2026-05-23

### Error 2026-05-23T01:01:30+00:00
```
2026-05-23T01:01:30.2868284Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2870065Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2884157Z    test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/ec7d0c11-8bd9-4f30-816f-406fea06040f/terraform test_working_directory=/tmp/plugintest274341069 test_step_number=1
2026-05-23T01:01:30.2908981Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2909946Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-23T01:01:30.2910749Z         
2026-05-23T01:01:30.2911305Z         Error: error creating project: test-acc-tf-p-1366019382302024385
2026-05-23T01:01:30.2911781Z         
2026-05-23T01:01:30.2912171Z           with mongodbatlas_project.test,
2026-05-23T01:01:30.2912993Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:01:30.2913753Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:01:30.2914144Z         
2026-05-23T01:01:30.2914765Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:01:30.2915627Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:01:30.2916411Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:30.2917031Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (73.35s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 23 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 17 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7686463Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7687688Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7698519Z    test_working_directory=/tmp/plugintest499266589 test_step_number=1 test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7717012Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7717699Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-28T01:01:56.7718196Z         
2026-05-28T01:01:56.7718611Z         Error: error creating project: test-acc-tf-p-2055566792233482771
2026-05-28T01:01:56.7718968Z         
2026-05-28T01:01:56.7719262Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7719868Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7720436Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7720738Z         
2026-05-28T01:01:56.7721491Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7722153Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7722758Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7723240Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (108.86s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0254421Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0255681Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0266766Z    test_step_number=1 test_name=TestAccConfigDSCustomDNSConfigurationAWS_basic test_terraform_path=/home/runner/work/_temp/7581813f-cf97-441e-ab92-a27fcdf89760/terraform test_working_directory=/tmp/plugintest348540072
2026-05-30T01:08:14.0286326Z === NAME  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0287052Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-05-30T01:08:14.0287682Z         
2026-05-30T01:08:14.0288139Z         Error: error creating project: test-acc-tf-p-1700357581935069896
2026-05-30T01:08:14.0288541Z         
2026-05-30T01:08:14.0288875Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0289672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0290286Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0290615Z         
2026-05-30T01:08:14.0291122Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0291808Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0292474Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0292988Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (79.39s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:11:09+00:00
```
2026-06-02T01:11:09.6049427Z === RUN   TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-06-02T01:11:09.6050421Z === CONT  TestAccConfigRSCustomDNSConfigurationAWS_basic
2026-06-02T01:11:09.6059639Z   
2026-06-02T01:11:09.6060207Z     resource_custom_dns_configuration_cluster_aws_test.go:22: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:11:09.6060629Z         
2026-06-02T01:11:09.6060992Z         Error: error creating project: test-acc-tf-p-8596989744846953893
2026-06-02T01:11:09.6061305Z         
2026-06-02T01:11:09.6061713Z           with mongodbatlas_project.test,
2026-06-02T01:11:09.6062217Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:09.6062691Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:09.6062948Z         
2026-06-02T01:11:09.6063340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:09.6063880Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:09.6064371Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:09.6064770Z --- FAIL: TestAccConfigRSCustomDNSConfigurationAWS_basic (68.58s)
```

- 2026-06-03 PASS 20 seconds
- 2026-06-04 PASS 30 seconds
- 2026-06-05 PASS 20 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 15 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
