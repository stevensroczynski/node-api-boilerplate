// To regenerate docs, run 'apidoc' in /src (after a npm install apidoc -g)

/**
 * @api {get} /missions Get All
 * @apiGroup Mission
 * @apiVersion 0.1.5
 */
 
/** 
 * @api {get} /missions/:mission_id Get by ID
 * @apiGroup Mission
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /missions/:mission_id/plans Get Plans associated to a Mission
 * @apiGroup Mission
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /missions/:mission_id Delete a Mission
 * @apiGroup Mission
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /missions/:mission_id Update a Mission
 * @apiGroup Mission
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /missions Create a Mission
 * @apiGroup Mission
 * @apiVersion 0.1.5
 * */

 ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /plans Get All
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /plans/:plan_id Get by ID
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /plans/:plan_id/plan-force-elements Get Plan Force Elements associated to a Plan
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /plans Create a Plan
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /plans/:plan_id Delete a Plan
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /plans/:plan_id Update a Plan
 * @apiGroup Plan
 * @apiVersion 0.1.5
 */

 ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /plans-extended Get All Plans + Includes State/Country Names
 * @apiGroup PlanExtended
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /plans-extended/:plan_id Get Plan by ID + Includes State/Country Names
 * @apiGroup PlanExtended
 * @apiVersion 0.1.5
 */

 ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /plan-force-elements Get All Plan Force Elements
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /plan-force-elements/:pfe_id Get Plan Force Element by ID
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /plan-force-elements/platforms Get Platforms associated to a Plan Force Element
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /plan-force-elements Create a Plan Force Element
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /plan-force-elements/:pfe_id Delete a Plan Force Element
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /plan-force-element/:pfe_id Update a Plan Force Element
 * @apiGroup PlanForceElement
 * @apiVersion 0.1.5
 */

  ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /platforms Get All Platforms
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /platforms/:platform_id Get Platform by ID
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /platforms/:platform_id/equipment Get Equipment associated to a Platform
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /platforms Create a Platform
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /platforms/:platform_id Delete a Platform
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /platforms/:platform_id Update a Platform
 * @apiGroup Platform
 * @apiVersion 0.1.5
 */

   ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /platform-equipment Get All Platform Equipment
 * @apiGroup PlatformEquipment
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /platform-equipment/:platform_equipment_id Get Platform Equipment by ID
 * @apiGroup PlatformEquipment
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /platform-equipment Create Platform Equipment
 * @apiGroup PlatformEquipment
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /platform-equipment/:platform_equipment_id Delete Platform Equipment
 * @apiGroup PlatformEquipment
 * @apiVersion 0.1.5
 */

    ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /force-elements Get All Force Elements
 * @apiGroup ForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /force-elements/:force_element_id Get Force Element by ID
 * @apiGroup ForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /force-elements Create Custom Force Element
 * @apiGroup ForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /force-elements/:force_element_id Delete Custom Force Element
 * @apiGroup ForceElement
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /force-elements/:force_element_id Update Custom Force Element
 * @apiGroup ForceElement
 * @apiVersion 0.1.5
 */

    ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /force-elements-extended Get All Force Elements + Parent/Grandparent names
 * @apiGroup ForceElementExtended
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /force-elements-extended Get Force Element by ID + Parent/Grandparent names
 * @apiGroup ForceElementExtended
 * @apiVersion 0.1.5
 */

    ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /task-organizations/:force_element_parent Get All child Force Elements of another Force Element
 * @apiGroup TaskOrganization
 * @apiVersion 0.1.5
 */

    ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /references/antennas Get All Antennas
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/antennas/:antenna_id Get Antenna by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/echelon-types Get All Echelon Types
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/echelon-types/:echelon_type_id Get Echelon Type by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/equipment Get All Equipment
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/equipment/:equipment_id Get Equipment by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/equipment-extended Get All Equipment + profile and antenna data
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/equipment-extended/:equipment_id Get Equipment + profile and antenna data by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/international-territories Get All International Territories
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/international-territories/:international_territory_id Get International Territory by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/countries Get All Countries
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/countries/:country_id Get Country by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/states Get All States
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/states/:state_id Get State by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/us-territories Get All US Territories
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

/**
 * @api {get} /references/us-territories/:us_territory_id Get US Territory by ID
 * @apiGroup ReferenceTables
 * @apiVersion 0.1.5
 */

    ///////////////////////////////////////////////////////////////////

/**
 * @api {get} /plan-bulk/:plan_id Get a Plan and its children by ID
 * @apiGroup PlanBulk
 * @apiVersion 0.1.5
 */

/**
 * @api {put} /plan-bulk/:plan_id Update a Plan or any of its children
 * @apiGroup PlanBulk
 * @apiVersion 0.1.5
 */

/**
 * @api {post} /plan-bulk Create a Plan and any of its children
 * @apiGroup PlanBulk
 * @apiVersion 0.1.5
 */

/**
 * @api {delete} /plan-bulk/:plan_id Delete a Plan and any of its children
 * @apiGroup PlanBulk
 * @apiVersion 0.1.5
 */



