# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029590000) |  | qa | 0.06s
[2025-05-18 00:31](#error-2025-05-18t0031580000) |  | qa | 0.05s
[2025-05-25 00:32](#error-2025-05-25t0032550000) |  | qa | 0.04s
[2025-05-28 08:38](#error-2025-05-28t0838430000) |  | qa | 0.04s
[2025-05-28 12:23](#error-2025-05-28t1223270000) |  | qa | 0.03s
[2025-06-08 00:33](#error-2025-06-08t0033530000) |  | qa | 0.05s
[2025-06-11 07:39](#error-2025-06-11t0739050000) |  | qa | 0.08s
[2025-06-15 00:33](#error-2025-06-15t0033430000) |  | qa | 0.03s
[2025-06-22 00:33](#error-2025-06-22t0033390000) |  | qa | 0.05s
[2025-06-29 00:34](#error-2025-06-29t0034190000) |  | qa | 0.03s
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | 0.03s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS a second
- 2025-04-13 PASS a second
- 2025-04-14 PASS a second
- 2025-04-15 PASS 2 seconds
- 2025-04-16
  - PASS 2 seconds
  - PASS a second
- 2025-04-17 PASS a second
- 2025-04-18 PASS a second
- 2025-04-19 PASS a second
- 2025-04-20 PASS a second
- 2025-04-21 PASS a second
- 2025-04-22 PASS a second
- 2025-04-23 PASS a second
- 2025-04-24 PASS a second
- 2025-04-25 PASS a second
- 2025-04-26 PASS a second
- 2025-04-27 PASS a second
- 2025-04-28 PASS a second
- 2025-04-29 PASS a second
- 2025-04-30
  - PASS a second
  - PASS a second
- 2025-05-01
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-05-02 PASS a second
- 2025-05-03 PASS a second
- 2025-05-04 PASS a second
- 2025-05-05 PASS a second
- 2025-05-06 PASS a second
- 2025-05-07 PASS a second
- 2025-05-08 PASS a second
- 2025-05-09 PASS a second
- 2025-05-10 PASS a second
- 2025-05-11

### Error 2025-05-11T00:29:59+00:00
```
2025-05-11T00:29:59.7705046Z === RUN   TestAccConfigDSOrgID_basic
2025-05-11T00:29:59.7706014Z === CONT  TestAccConfigDSOrgID_basic
2025-05-11T00:29:59.7720283Z    test_name=TestAccConfigDSOrgID_basic
2025-05-11T00:29:59.7721266Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-11T00:29:59.7722167Z         
2025-05-11T00:29:59.7723480Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-11T00:29:59.7724428Z         
2025-05-11T00:29:59.7724992Z           with data.mongodbatlas_roles_org_id.test,
2025-05-11T00:29:59.7726045Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-11T00:29:59.7726959Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-11T00:29:59.7727449Z         
2025-05-11T00:29:59.7727825Z --- FAIL: TestAccConfigDSOrgID_basic (0.64s)
```

- 2025-05-12 PASS a second
- 2025-05-13
  - PASS a second
  - PASS a second
- 2025-05-14 PASS a second
- 2025-05-15 PASS a second
- 2025-05-16 PASS a second
- 2025-05-17 PASS a second
- 2025-05-18

### Error 2025-05-18T00:31:58+00:00
```
2025-05-18T00:31:58.1641031Z === RUN   TestAccConfigDSOrgID_basic
2025-05-18T00:31:58.1642015Z === CONT  TestAccConfigDSOrgID_basic
2025-05-18T00:31:58.1656448Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/aebf3c15-e182-4f23-a50a-f01f924448af/terraform test_working_directory=/tmp/plugintest1252620176
2025-05-18T00:31:58.1658610Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-18T00:31:58.1659407Z         
2025-05-18T00:31:58.1660758Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-18T00:31:58.1661761Z         
2025-05-18T00:31:58.1662370Z           with data.mongodbatlas_roles_org_id.test,
2025-05-18T00:31:58.1663506Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-18T00:31:58.1664514Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-18T00:31:58.1665049Z         
2025-05-18T00:31:58.1665456Z --- FAIL: TestAccConfigDSOrgID_basic (0.51s)
```

- 2025-05-19 PASS a second
- 2025-05-20 PASS a second
- 2025-05-21 PASS a second
- 2025-05-22 PASS a second
- 2025-05-23 PASS a second
- 2025-05-24 PASS a second
- 2025-05-25

### Error 2025-05-25T00:32:55+00:00
```
2025-05-25T00:32:55.5252185Z === RUN   TestAccConfigDSOrgID_basic
2025-05-25T00:32:55.5253164Z === CONT  TestAccConfigDSOrgID_basic
2025-05-25T00:32:55.5290657Z   
2025-05-25T00:32:55.5291455Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-25T00:32:55.5292142Z         
2025-05-25T00:32:55.5293323Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-25T00:32:55.5294225Z         
2025-05-25T00:32:55.5294958Z           with data.mongodbatlas_roles_org_id.test,
2025-05-25T00:32:55.5296108Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-25T00:32:55.5324740Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-25T00:32:55.5325558Z         
2025-05-25T00:32:55.5325970Z --- FAIL: TestAccConfigDSOrgID_basic (0.44s)
```

- 2025-05-26 PASS a second
- 2025-05-27 PASS a second
- 2025-05-28
  - PASS 2 seconds
  - FAIL a moment

### Error 2025-05-28T08:38:43+00:00
```
2025-05-28T08:38:43.8706123Z === RUN   TestAccConfigDSOrgID_basic
2025-05-28T08:38:43.8707153Z === CONT  TestAccConfigDSOrgID_basic
2025-05-28T08:38:43.8720653Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/54bb752c-9b08-4ca0-b57c-ab3e18fcddc5/terraform test_working_directory=/tmp/plugintest2343150649 test_step_number=1
2025-05-28T08:38:43.8722774Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-28T08:38:43.8723599Z         
2025-05-28T08:38:43.8738021Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-28T08:38:43.8739066Z         
2025-05-28T08:38:43.8739696Z           with data.mongodbatlas_roles_org_id.test,
2025-05-28T08:38:43.8740820Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-28T08:38:43.8742009Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-28T08:38:43.8742553Z         
2025-05-28T08:38:43.8743297Z --- FAIL: TestAccConfigDSOrgID_basic (0.41s)
```

  - FAIL a moment

### Error 2025-05-28T12:23:27+00:00
```
2025-05-28T12:23:27.5203660Z === RUN   TestAccConfigDSOrgID_basic
2025-05-28T12:23:27.5204511Z === CONT  TestAccConfigDSOrgID_basic
2025-05-28T12:23:27.5214160Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/12966a46-54c8-472c-8313-832d99bb3518/terraform test_working_directory=/tmp/plugintest480582016 test_step_number=1
2025-05-28T12:23:27.5215219Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-28T12:23:27.5215666Z         
2025-05-28T12:23:27.5216386Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-05-28T12:23:27.5216924Z         
2025-05-28T12:23:27.5227282Z           with data.mongodbatlas_roles_org_id.test,
2025-05-28T12:23:27.5228030Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-05-28T12:23:27.5228619Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-05-28T12:23:27.5229133Z         
2025-05-28T12:23:27.5229397Z --- FAIL: TestAccConfigDSOrgID_basic (0.34s)
```

- 2025-05-29 PASS a second
- 2025-05-30 PASS a second
- 2025-05-31 PASS a second
- 2025-06-01
  - PASS a second
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-06-02
  - PASS a second
  - PASS 2 seconds
  - PASS a second
- 2025-06-03 PASS a second
- 2025-06-04 PASS a second
- 2025-06-05 PASS a second
- 2025-06-06 PASS a second
- 2025-06-07 PASS a second
- 2025-06-08

### Error 2025-06-08T00:33:53+00:00
```
2025-06-08T00:33:53.2133765Z === RUN   TestAccConfigDSOrgID_basic
2025-06-08T00:33:53.2134811Z === CONT  TestAccConfigDSOrgID_basic
2025-06-08T00:33:53.2210087Z   
2025-06-08T00:33:53.2210994Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-08T00:33:53.2211814Z         
2025-06-08T00:33:53.2232142Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-08T00:33:53.2244672Z         
2025-06-08T00:33:53.2245330Z           with data.mongodbatlas_roles_org_id.test,
2025-06-08T00:33:53.2246495Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-08T00:33:53.2247510Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-08T00:33:53.2248056Z         
2025-06-08T00:33:53.2248485Z --- FAIL: TestAccConfigDSOrgID_basic (0.47s)
```

- 2025-06-09 PASS a second
- 2025-06-10 PASS a second
- 2025-06-11
  - PASS a second
  - FAIL a moment

### Error 2025-06-11T07:39:05+00:00
```
2025-06-11T07:39:05.1359014Z === RUN   TestAccConfigDSOrgID_basic
2025-06-11T07:39:05.1359572Z === CONT  TestAccConfigDSOrgID_basic
2025-06-11T07:39:05.1367404Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/08c539c0-676f-48f3-a2c7-1bfa0f2bbddb/terraform
2025-06-11T07:39:05.1368237Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-11T07:39:05.1368787Z         
2025-06-11T07:39:05.1369586Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-11T07:39:05.1370117Z         
2025-06-11T07:39:05.1370438Z           with data.mongodbatlas_roles_org_id.test,
2025-06-11T07:39:05.1371042Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-11T07:39:05.1371586Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-11T07:39:05.1371872Z         
2025-06-11T07:39:05.1372094Z --- FAIL: TestAccConfigDSOrgID_basic (0.79s)
```

- 2025-06-12 PASS a second
- 2025-06-13 PASS a second
- 2025-06-14 PASS a second
- 2025-06-15

### Error 2025-06-15T00:33:43+00:00
```
2025-06-15T00:33:43.1867337Z === RUN   TestAccConfigDSOrgID_basic
2025-06-15T00:33:43.1868544Z === CONT  TestAccConfigDSOrgID_basic
2025-06-15T00:33:43.1882468Z    test_working_directory=/tmp/plugintest2594428317 test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/31fa8d43-eae3-4acf-a133-25c5ef7304e1/terraform test_step_number=1
2025-06-15T00:33:43.1884487Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-15T00:33:43.1885264Z         
2025-06-15T00:33:43.1886625Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-15T00:33:43.1887600Z         
2025-06-15T00:33:43.1888787Z           with data.mongodbatlas_roles_org_id.test,
2025-06-15T00:33:43.1889954Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-15T00:33:43.1890961Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-15T00:33:43.1891479Z         
2025-06-15T00:33:43.1891851Z --- FAIL: TestAccConfigDSOrgID_basic (0.30s)
```

- 2025-06-16 PASS a second
- 2025-06-17 PASS a second
- 2025-06-18
  - PASS a second
  - PASS a second
- 2025-06-19 PASS a second
- 2025-06-20 PASS a second
- 2025-06-21 PASS a second
- 2025-06-22

### Error 2025-06-22T00:33:39+00:00
```
2025-06-22T00:33:39.4135680Z === RUN   TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4136728Z === CONT  TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4171329Z    test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest3782071924
2025-06-22T00:33:39.4173097Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-22T00:33:39.4174320Z         
2025-06-22T00:33:39.4175994Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-22T00:33:39.4177119Z         
2025-06-22T00:33:39.4177879Z           with data.mongodbatlas_roles_org_id.test,
2025-06-22T00:33:39.4179134Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-22T00:33:39.4180205Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-22T00:33:39.4181450Z         
2025-06-22T00:33:39.4182134Z --- FAIL: TestAccConfigDSOrgID_basic (0.48s)
```

- 2025-06-23 PASS a second
- 2025-06-24 PASS a second
- 2025-06-25 PASS a second
- 2025-06-26 PASS a second
- 2025-06-27 PASS a second
- 2025-06-28 PASS a second
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
```
2025-06-29T00:34:19.1916315Z === RUN   TestAccConfigDSOrgID_basic
2025-06-29T00:34:19.1916876Z === CONT  TestAccConfigDSOrgID_basic
2025-06-29T00:34:19.1924702Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/1370ebee-90f1-496c-88ad-ad991f86e814/terraform
2025-06-29T00:34:19.1925529Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-29T00:34:19.1925955Z         
2025-06-29T00:34:19.1926666Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-29T00:34:19.1927203Z         
2025-06-29T00:34:19.1927656Z           with data.mongodbatlas_roles_org_id.test,
2025-06-29T00:34:19.1928277Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-29T00:34:19.1928812Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-29T00:34:19.1929099Z         
2025-06-29T00:34:19.1929329Z --- FAIL: TestAccConfigDSOrgID_basic (0.30s)
```

- 2025-06-30 PASS a second
- 2025-07-01
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS 3 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS a second
- 2025-07-04 PASS a second
- 2025-07-05 PASS a second
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.3054733Z === RUN   TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3055844Z === CONT  TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3069027Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/f4a4173d-86e1-4089-95dd-38ad7426626e/terraform
2025-07-06T00:34:00.3070401Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-06T00:34:00.3071076Z         
2025-07-06T00:34:00.3072280Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-07-06T00:34:00.3073190Z         
2025-07-06T00:34:00.3073766Z           with data.mongodbatlas_roles_org_id.test,
2025-07-06T00:34:00.3074838Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-07-06T00:34:00.3075947Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-07-06T00:34:00.3076444Z         
2025-07-06T00:34:00.3076829Z --- FAIL: TestAccConfigDSOrgID_basic (0.32s)
```

- 2025-07-07 PASS a second
- 2025-07-08 PASS a second
- 2025-07-09 PASS a second
- 2025-07-10 PASS a second