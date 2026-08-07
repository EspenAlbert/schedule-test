# ldap/ldapconfiguration/TestMigLDAPConfiguration_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 14) FAIL(x 5)
Success rate: 73.68%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-10 01:24](#error-2026-07-10t0124090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity | dev | 4.04s
[2026-07-13 01:03](#error-2026-07-13t0103270000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity | dev | 4.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10

### Error 2026-07-10T01:24:09+00:00
```
2026-07-10T01:24:09.8205700Z === RUN   TestMigLDAPConfiguration_basic
2026-07-10T01:24:09.8206897Z     resource_ldap_configuration_migration_test.go:10: Creating execution project (1): test-acc-tf-p-7270451980682766377
2026-07-10T01:24:09.8219149Z    test_working_directory=/tmp/plugintest3034038864 test_step_number=1 test_name=TestMigLDAPConfiguration_basic
2026-07-10T01:24:09.8222284Z     resource_ldap_configuration_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-10T01:24:09.8223472Z         
2026-07-10T01:24:09.8227017Z         Error: error creating MongoDB LDAPConfiguration (6a5041a1af0479f8ffb2e43b): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a5041a1af0479f8ffb2e43b/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-10T01:24:09.8228868Z         
2026-07-10T01:24:09.8229344Z           with mongodbatlas_ldap_configuration.test,
2026-07-10T01:24:09.8230178Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-10T01:24:09.8230977Z           14: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-10T01:24:09.8231427Z         
2026-07-10T01:24:09.8231787Z --- FAIL: TestMigLDAPConfiguration_basic (4.43s)
```

- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13

### Error 2026-07-13T01:03:27+00:00
```
2026-07-13T01:03:27.6167029Z === RUN   TestMigLDAPConfiguration_basic
2026-07-13T01:03:27.6168557Z     resource_ldap_configuration_migration_test.go:10: Creating execution project (1): test-acc-tf-p-8954281341538114043
2026-07-13T01:03:27.6183817Z   
2026-07-13T01:03:27.6187216Z     resource_ldap_configuration_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-13T01:03:27.6188189Z         
2026-07-13T01:03:27.6192460Z         Error: error creating MongoDB LDAPConfiguration (6a54356da3b75f3f04491cc3): https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a54356da3b75f3f04491cc3/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-13T01:03:27.6195328Z         
2026-07-13T01:03:27.6196050Z           with mongodbatlas_ldap_configuration.test,
2026-07-13T01:03:27.6197388Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-13T01:03:27.6198704Z           14: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-13T01:03:27.6199392Z         
2026-07-13T01:03:27.6199934Z --- FAIL: TestMigLDAPConfiguration_basic (4.72s)
```

- 2026-07-14: MISSING
- 2026-07-15 PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17 PASS 8 seconds
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 10 seconds
- 2026-07-23: MISSING
- 2026-07-24 PASS 10 seconds
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28: MISSING
- 2026-07-29 PASS 8 seconds
- 2026-07-30: MISSING
- 2026-07-31 PASS 9 seconds
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 9 seconds
- 2026-08-04: MISSING
- 2026-08-05 PASS 8 seconds
- 2026-08-06: MISSING
- 2026-08-07 PASS 8 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-12 01:05](#error-2026-07-12t0105090000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity | qa | 4.09s
[2026-07-15 07:39](#error-2026-07-15t0739440000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity | qa | 6.01s
[2026-07-15 09:47](#error-2026-07-15t0947540000) | LDAP_HOSTNAME_NOT_ALLOWED /api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity | qa | 5.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T01:05:09+00:00
```
2026-07-12T01:05:09.8557760Z === RUN   TestMigLDAPConfiguration_basic
2026-07-12T01:05:09.8558869Z     resource_ldap_configuration_migration_test.go:10: Creating execution project (1): test-acc-tf-p-160614126180228883
2026-07-12T01:05:09.8569067Z   
2026-07-12T01:05:09.8569717Z     resource_ldap_configuration_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-12T01:05:09.8570303Z         
2026-07-12T01:05:09.8572818Z         Error: error creating MongoDB LDAPConfiguration (6a52e45254924de0baf4a87a): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a52e45254924de0baf4a87a/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-12T01:05:09.8574641Z         
2026-07-12T01:05:09.8575099Z           with mongodbatlas_ldap_configuration.test,
2026-07-12T01:05:09.8575921Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-12T01:05:09.8576707Z           14: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-12T01:05:09.8577149Z         
2026-07-12T01:05:09.8577494Z --- FAIL: TestMigLDAPConfiguration_basic (4.95s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - FAIL 6 seconds

### Error 2026-07-15T07:39:44+00:00
```
2026-07-15T07:39:44.2257594Z === RUN   TestMigLDAPConfiguration_basic
2026-07-15T07:39:44.2258699Z     resource_ldap_configuration_migration_test.go:10: Creating execution project (1): test-acc-tf-p-267***3912411453427
2026-07-15T07:39:44.2268044Z   
2026-07-15T07:39:44.2270131Z     resource_ldap_configuration_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-15T07:39:44.2270699Z         
2026-07-15T07:39:44.2272920Z         Error: error creating MongoDB LDAPConfiguration (6a5735828f62f9b41280c7a6): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5735828f62f9b41280c7a6/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T07:39:44.2274157Z         
2026-07-15T07:39:44.2274599Z           with mongodbatlas_ldap_configuration.test,
2026-07-15T07:39:44.2275568Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-15T07:39:44.2276314Z           14: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-15T07:39:44.2276745Z         
2026-07-15T07:39:44.2277119Z --- FAIL: TestMigLDAPConfiguration_basic (6.14s)
```

  - FAIL 5 seconds

### Error 2026-07-15T09:47:54+00:00
```
2026-07-15T09:47:54.5813167Z === RUN   TestMigLDAPConfiguration_basic
2026-07-15T09:47:54.5814581Z     resource_ldap_configuration_migration_test.go:10: Creating execution project (1): test-acc-tf-p-1844071160126329080
2026-07-15T09:47:54.5824314Z    test_name=TestMigLDAPConfiguration_basic test_terraform_path=/home/runner/work/_temp/29ea9546-50ab-4f02-a929-f792ea8ffe9c/terraform test_working_directory=/tmp/plugintest3618631401
2026-07-15T09:47:54.5825614Z     resource_ldap_configuration_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2026-07-15T09:47:54.5826231Z         
2026-07-15T09:47:54.5828736Z         Error: error creating MongoDB LDAPConfiguration (6a5753ad8f62f9b412918c81): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a5753ad8f62f9b412918c81/userSecurity PATCH: HTTP 400 Bad Request (Error code: "LDAP_HOSTNAME_NOT_ALLOWED") Detail: The LDAP hostname *** is not allowed. Reason: Bad Request. Params: [***], BadRequestDetail: 
2026-07-15T09:47:54.5830098Z         
2026-07-15T09:47:54.5830844Z           with mongodbatlas_ldap_configuration.test,
2026-07-15T09:47:54.5831678Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_ldap_configuration" "test":
2026-07-15T09:47:54.5832475Z           14: 		resource "mongodbatlas_ldap_configuration" "test" {
2026-07-15T09:47:54.5832931Z         
2026-07-15T09:47:54.5833303Z --- FAIL: TestMigLDAPConfiguration_basic (5.00s)
```

- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 10 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 8 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
