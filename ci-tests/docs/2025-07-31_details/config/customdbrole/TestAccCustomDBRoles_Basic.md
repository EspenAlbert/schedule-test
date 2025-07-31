# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:33](#error-2025-07-06t0033170000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/6869c3ff690ae45e168bcbce/customDBRoles/roles/test-acc-tf-6296991448303463705 | qa |  | 14.03s
[2025-07-10 13:08](#error-2025-07-10t1308210000) | API Error INVALID_DATABASE_NAME /api/atlas/v2/groups/{groupId}/customDBRoles/roles/{roleName} | qa | real_test_failure | 16.02s
[2025-07-13 00:34](#error-2025-07-13t0034200000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/6872fe8b006d8d55bbaa1e6d/customDBRoles/roles/test-acc-tf-6657692063814774928 | qa |  | 14.00s
[2025-07-20 00:35](#error-2025-07-20t0035100000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/687c3936823af9166ef910f6/customDBRoles/roles/test-acc-tf-8948141976696083489 | qa |  | 14.05s
[2025-07-23 08:17](#error-2025-07-23t0817160000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/68809a0ddafa37582cecc4ff/customDBRoles/roles/test-acc-tf-6659450004859832247 | qa | flaky_500 | 14.02s
[2025-07-23 13:25](#error-2025-07-23t1325360000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/6880e2460afa8a5c60505f5a/customDBRoles/roles/test-acc-tf-5468552022820064761 | qa |  | 16.04s
[2025-07-27 00:35](#error-2025-07-27t0035480000) | INVALID_DATABASE_NAME /api/atlas/v2/groups/688573daef1f7377717a8aa1/customDBRoles/roles/test-acc-tf-1549773359048689059 | qa |  | 16.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 16 seconds
- 2025-07-03 PASS 18 seconds
- 2025-07-04 PASS 17 seconds
- 2025-07-05 PASS 20 seconds
- 2025-07-06

### Error 2025-07-06T00:33:17+00:00
```
2025-07-06T00:33:17.8235020Z === RUN   TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8317253Z === CONT  TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8344298Z   
2025-07-06T00:33:17.8345487Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-06T00:33:17.8346342Z         
2025-07-06T00:33:17.8351144Z         Error: error updating custom db role (test-acc-tf-6296991448303463705): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3ff690ae45e168bcbce/customDBRoles/roles/test-acc-tf-6296991448303463705 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-06T00:33:17.8354112Z         
2025-07-06T00:33:17.8354971Z           with mongodbatlas_custom_db_role.test,
2025-07-06T00:33:17.8357784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-06T00:33:17.8359423Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-06T00:33:17.8360223Z         
2025-07-06T00:33:17.8360642Z --- FAIL: TestAccCustomDBRoles_Basic (14.27s)
```

- 2025-07-07 PASS 16 seconds
- 2025-07-08 PASS 19 seconds
- 2025-07-09 PASS 20 seconds
- 2025-07-10
  - PASS 15 seconds
  - FAIL 16 seconds

### Error 2025-07-10T13:08:21+00:00
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-07-10T13:08:21.920000+00:00-TestAccCustomDBRoles_Basic',confidence=1.0,ts_when='20 days ago')
API Error INVALID_DATABASE_NAME /api/atlas/v2/groups/{groupId}/customDBRoles/roles/{roleName}
```
2025-07-10T13:08:21.0920956Z === RUN   TestAccCustomDBRoles_Basic
2025-07-10T13:08:21.1134547Z === CONT  TestAccCustomDBRoles_Basic
2025-07-10T13:08:21.1155597Z   
2025-07-10T13:08:21.1187067Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-10T13:08:21.1187888Z         
2025-07-10T13:08:21.1245767Z         Error: error updating custom db role (test-acc-tf-5386595873210940290): https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb01006d8d55bb9e6818/customDBRoles/roles/test-acc-tf-5386595873210940290 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-10T13:08:21.1248475Z         
2025-07-10T13:08:21.1249028Z           with mongodbatlas_custom_db_role.test,
2025-07-10T13:08:21.1250131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-10T13:08:21.1251152Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-10T13:08:21.1251682Z         
2025-07-10T13:08:21.1252081Z --- FAIL: TestAccCustomDBRoles_Basic (16.18s)
```

- 2025-07-11 PASS 17 seconds
- 2025-07-12 PASS 16 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.7744657Z === RUN   TestAccCustomDBRoles_Basic
2025-07-13T00:34:20.7752451Z === CONT  TestAccCustomDBRoles_Basic
2025-07-13T00:34:20.7772638Z    test_working_directory=/tmp/plugintest3157105781 test_name=TestAccCustomDBRoles_Basic
2025-07-13T00:34:20.7773816Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-13T00:34:20.7774506Z         
2025-07-13T00:34:20.7777942Z         Error: error updating custom db role (test-acc-tf-6657692063814774928): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe8b006d8d55bbaa1e6d/customDBRoles/roles/test-acc-tf-6657692063814774928 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-13T00:34:20.7780567Z         
2025-07-13T00:34:20.7781130Z           with mongodbatlas_custom_db_role.test,
2025-07-13T00:34:20.7782248Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-13T00:34:20.7783278Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-13T00:34:20.7783798Z         
2025-07-13T00:34:20.7784195Z --- FAIL: TestAccCustomDBRoles_Basic (14.03s)
```

- 2025-07-14 PASS 19 seconds
- 2025-07-15 PASS 17 seconds
- 2025-07-16 PASS 17 seconds
- 2025-07-17 PASS 17 seconds
- 2025-07-18 PASS 17 seconds
- 2025-07-19 PASS 16 seconds
- 2025-07-20

### Error 2025-07-20T00:35:10+00:00
```
2025-07-20T00:35:10.2457939Z === RUN   TestAccCustomDBRoles_Basic
2025-07-20T00:35:10.2462665Z === CONT  TestAccCustomDBRoles_Basic
2025-07-20T00:35:10.2473802Z    test_terraform_path=/home/runner/work/_temp/6449a2b7-018b-4b58-9868-90b84cc816b5/terraform
2025-07-20T00:35:10.2474455Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-20T00:35:10.2474852Z         
2025-07-20T00:35:10.2476866Z         Error: error updating custom db role (test-acc-tf-8948141976696083489): https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3936823af9166ef910f6/customDBRoles/roles/test-acc-tf-8948141976696083489 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-20T00:35:10.2478163Z         
2025-07-20T00:35:10.2478480Z           with mongodbatlas_custom_db_role.test,
2025-07-20T00:35:10.2479102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-20T00:35:10.2479680Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-20T00:35:10.2479986Z         
2025-07-20T00:35:10.2480219Z --- FAIL: TestAccCustomDBRoles_Basic (14.48s)
```

- 2025-07-21 PASS 19 seconds
- 2025-07-22 PASS 18 seconds
- 2025-07-23
  - PASS 16 seconds
  - FAIL 14 seconds

### Error 2025-07-23T08:17:16+00:00
```
2025-07-23T08:17:16.8046684Z === RUN   TestAccCustomDBRoles_Basic
2025-07-23T08:17:16.8054293Z === CONT  TestAccCustomDBRoles_Basic
2025-07-23T08:17:16.8075311Z   
2025-07-23T08:17:16.8076068Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-23T08:17:16.8076975Z         
2025-07-23T08:17:16.8080439Z         Error: error updating custom db role (test-acc-tf-6659450004859832247): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a0ddafa37582cecc4ff/customDBRoles/roles/test-acc-tf-6659450004859832247 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-23T08:17:16.8082937Z         
2025-07-23T08:17:16.8083501Z           with mongodbatlas_custom_db_role.test,
2025-07-23T08:17:16.8084615Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-23T08:17:16.8085636Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-23T08:17:16.8086159Z         
2025-07-23T08:17:16.8086716Z --- FAIL: TestAccCustomDBRoles_Basic (14.22s)
```

  - FAIL 16 seconds

### Error 2025-07-23T13:25:36+00:00
```
2025-07-23T13:25:36.7635818Z === RUN   TestAccCustomDBRoles_Basic
2025-07-23T13:25:36.7642696Z === CONT  TestAccCustomDBRoles_Basic
2025-07-23T13:25:36.7682599Z    test_name=TestAccCustomDBRoles_Basic
2025-07-23T13:25:36.7683586Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-23T13:25:36.7684459Z         
2025-07-23T13:25:36.7686740Z         Error: error updating custom db role (test-acc-tf-5468552022820064761): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880e2460afa8a5c60505f5a/customDBRoles/roles/test-acc-tf-5468552022820064761 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-23T13:25:36.7688133Z         
2025-07-23T13:25:36.7688472Z           with mongodbatlas_custom_db_role.test,
2025-07-23T13:25:36.7689120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-23T13:25:36.7689715Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-23T13:25:36.7690027Z         
2025-07-23T13:25:36.7690268Z --- FAIL: TestAccCustomDBRoles_Basic (16.35s)
```

- 2025-07-24 PASS 17 seconds
- 2025-07-25 PASS 17 seconds
- 2025-07-26 PASS 16 seconds
- 2025-07-27

### Error 2025-07-27T00:35:48+00:00
```
2025-07-27T00:35:48.5391483Z === RUN   TestAccCustomDBRoles_Basic
2025-07-27T00:35:48.5399468Z === CONT  TestAccCustomDBRoles_Basic
2025-07-27T00:35:48.5447138Z   
2025-07-27T00:35:48.5447918Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-27T00:35:48.5448648Z         
2025-07-27T00:35:48.5452077Z         Error: error updating custom db role (test-acc-tf-1549773359048689059): https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573daef1f7377717a8aa1/customDBRoles/roles/test-acc-tf-1549773359048689059 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-27T00:35:48.5454428Z         
2025-07-27T00:35:48.5455055Z           with mongodbatlas_custom_db_role.test,
2025-07-27T00:35:48.5459249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-27T00:35:48.5460360Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-27T00:35:48.5460950Z         
2025-07-27T00:35:48.5461385Z --- FAIL: TestAccCustomDBRoles_Basic (16.57s)
```

- 2025-07-28 PASS 19 seconds
- 2025-07-29 PASS 17 seconds
- 2025-07-30 PASS 15 seconds
- 2025-07-31 PASS 21 seconds