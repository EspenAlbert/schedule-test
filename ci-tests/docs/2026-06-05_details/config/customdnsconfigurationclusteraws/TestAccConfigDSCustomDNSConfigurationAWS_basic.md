# config/customdnsconfigurationclusteraws/TestAccConfigDSCustomDNSConfigurationAWS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 9)
Success rate: 70.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-05-23 01:01](#error-2026-05-23t0101300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-05-26 02:12](#error-2026-05-26t0212160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.00s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s
[2026-06-02 01:11](#error-2026-06-02t0111090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 33 seconds
  - PASS 10 seconds
- 2026-05-08 PASS 8 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.4041141Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4042510Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4052175Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-09T00:59:14.4052718Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-09T00:59:14.4053195Z         
2026-05-09T00:59:14.4064299Z         Error: error creating project: test-acc-tf-p-8594305783444628307
2026-05-09T00:59:14.4064799Z         
2026-05-09T00:59:14.4065196Z           with mongodbatlas_project.test,
2026-05-09T00:59:14.4066011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:59:14.4066729Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:59:14.4067091Z         
2026-05-09T00:59:14.4067709Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:59:14.4068543Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:59:14.4069304Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.4069908Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (74.35s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 58 seconds
- 2026-05-13 PASS 10 seconds
- 2026-05-14 PASS 44 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5725976Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-16T01:00:42.5727657Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-16T01:00:42.5757233Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-16T01:00:42.5757954Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-16T01:00:42.5758602Z         
2026-05-16T01:00:42.5759021Z         Error: error creating project: test-acc-tf-p-2772929914078199943
2026-05-16T01:00:42.5759390Z         
2026-05-16T01:00:42.5759687Z           with mongodbatlas_project.test,
2026-05-16T01:00:42.5760299Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:00:42.5760890Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:00:42.5761194Z         
2026-05-16T01:00:42.5761665Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:00:42.5762326Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:00:42.5762922Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5763401Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (79.85s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.9081525Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9085501Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9109634Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-19T01:08:20.9111158Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:08:20.9112235Z         
2026-05-19T01:08:20.9113125Z         Error: error creating project: test-acc-tf-p-5536081041937923181
2026-05-19T01:08:20.9114122Z         
2026-05-19T01:08:20.9114883Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9116228Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9117446Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9118158Z         
2026-05-19T01:08:20.9119232Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9120679Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9121950Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9122929Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (62.32s)
```

- 2026-05-20 PASS 10 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7239021Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-21T01:07:04.7240875Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-21T01:07:04.7270684Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-21T01:07:04.7271414Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:07:04.7271945Z         
2026-05-21T01:07:04.7272375Z         Error: error creating project: test-acc-tf-p-5788350453495872761
2026-05-21T01:07:04.7272744Z         
2026-05-21T01:07:04.7273062Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7273690Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7274284Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7274596Z         
2026-05-21T01:07:04.7275078Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7275924Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7276530Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7277014Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (75.76s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:01:30+00:00
```
2026-05-23T01:01:30.2867248Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2869519Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2885474Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-23T01:01:30.2886471Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:01:30.2887134Z         
2026-05-23T01:01:30.2887688Z         Error: error creating project: test-acc-tf-p-370109509539127672
2026-05-23T01:01:30.2888153Z         
2026-05-23T01:01:30.2888536Z           with mongodbatlas_project.test,
2026-05-23T01:01:30.2889336Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:01:30.2890084Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:01:30.2890469Z         
2026-05-23T01:01:30.2891217Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:01:30.2892083Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:01:30.2893042Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:30.2893656Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (62.83s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26

### Error 2026-05-26T02:12:16+00:00
```
2026-05-26T02:12:16.0439539Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-26T02:12:16.0442391Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-26T02:12:16.0463991Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-26T02:12:16.0465266Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:12:16.0466171Z         
2026-05-26T02:12:16.0466902Z         Error: error creating project: test-acc-tf-p-2392212307147876381
2026-05-26T02:12:16.0467531Z         
2026-05-26T02:12:16.0468044Z           with mongodbatlas_project.test,
2026-05-26T02:12:16.0469128Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:12:16.0470121Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:12:16.0470625Z         
2026-05-26T02:12:16.0471453Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:12:16.0472609Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:12:16.0473899Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0474705Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (65.52s)
```

- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7685632Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7687290Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7699183Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-28T01:01:56.7699893Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:01:56.7700409Z         
2026-05-28T01:01:56.7701081Z         Error: error creating project: test-acc-tf-p-8028475701287570803
2026-05-28T01:01:56.7701483Z         
2026-05-28T01:01:56.7701791Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7702405Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7702983Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7703282Z         
2026-05-28T01:01:56.7703747Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7704395Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7704993Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7705463Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (69.03s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0253566Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0255260Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0267930Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-05-30T01:08:14.0268682Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:08:14.0269227Z         
2026-05-30T01:08:14.0269700Z         Error: error creating project: test-acc-tf-p-2800781842498756292
2026-05-30T01:08:14.0270097Z         
2026-05-30T01:08:14.0270442Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0271088Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0271690Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0272023Z         
2026-05-30T01:08:14.0272525Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0273220Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0273844Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0274350Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (75.41s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02

### Error 2026-06-02T01:11:09+00:00
```
2026-06-02T01:11:09.6048746Z === RUN   TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-06-02T01:11:09.6050089Z === CONT  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-06-02T01:11:09.6074321Z === NAME  TestAccConfigDSCustomDNSConfigurationAWS_basic
2026-06-02T01:11:09.6074896Z     data_source_custom_dns_configuration_cluster_aws_test.go:18: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:11:09.6075320Z         
2026-06-02T01:11:09.6075681Z         Error: error creating project: test-acc-tf-p-6914333694352608832
2026-06-02T01:11:09.6075990Z         
2026-06-02T01:11:09.6076257Z           with mongodbatlas_project.test,
2026-06-02T01:11:09.6076762Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:09.6077247Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:09.6077518Z         
2026-06-02T01:11:09.6077938Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:09.6078470Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:09.6078963Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:09.6079364Z --- FAIL: TestAccConfigDSCustomDNSConfigurationAWS_basic (84.54s)
```

- 2026-06-03 PASS 10 seconds
- 2026-06-04 PASS 19 seconds
- 2026-06-05 PASS 8 seconds

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
- 2026-05-17 PASS 7 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
